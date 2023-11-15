import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
  user: [],
  loading: false,
  error: ""
}

export const signupUser = createAsyncThunk('signup/signupUser', async (userData) => {
  console.log(userData.email, userData.password)
  try {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      // console.log(response.json())
      console.log('Failed to sign up');
      // throw new Error('Failed to sign up');
    }
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify({ email: data.email, token: data.token }))
      console.log('user signed up successfully')
    }
    console.log(data)
    return (data)
  } catch (error) {
    throw new Error(error.message);
  }
})

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    // add reducers here
    logout: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default signupSlice.reducer
export const { logout } = signupSlice.actions