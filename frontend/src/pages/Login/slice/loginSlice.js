import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  user: null,
  loading: false,
  error: ""
}

export const loginUser = createAsyncThunk('login/loginUser', async ({ email, password }) => {
  console.log(email, password)
  try {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      // console.log(response.json())
      console.log('Failed to login');
      throw new Error('Failed to login up');
    }
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data))
      console.log('user logged in successfully')
    }
    console.log(data)
    return data

  } catch (error) {
    throw new Error(error.message);
  }
})

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // add reducers here
    logout: (state) => {
      state.user = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log('user state before', state.user)
      state.loading = false
      state.user = action.payload
      console.log('user state before', state.user)
      console.log('payload', action.payload)
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default loginSlice.reducer
export const { logout } = loginSlice.actions
