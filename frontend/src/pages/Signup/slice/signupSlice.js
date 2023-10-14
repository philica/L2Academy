import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    user:[],
    loading: false,
    error: ""
}

export const signupUser = createAsyncThunk('signup/signupUser', async ({ email, password }) => {
    console.log(email,password)
    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        // console.log(response.json())
        console.log('Failed to sign up');
        // throw new Error('Failed to sign up');
      }
      const data = await response.json();
      if(response.ok){
        localStorage.setItem('user',JSON.stringify(data)) 
        console.log('user signed up successfully')
    }
    console.log(data)
    } catch (error) {
      throw new Error(error.message);
    }
  })

const signupSlice = createSlice({
    name: 'signup',
    initialState ,
    reducers: {
        // add reducers here
        logout: (state) => {
            localStorage.removeItem('user')
            state.user = null
        }
    },
    extraReducers:(builder) => {
        builder.addCase(signupUser.pending,(state,action) => {
            state.loading = true
        })
        builder.addCase(signupUser.fulfilled,(state,action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(signupUser.rejected,(state,action) => {
            state.loading = false
            state.error = action.payload
        })
    }
 })

export default signupSlice.reducer
