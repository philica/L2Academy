import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    user: [],
    loading: false,
    error: ""
}


export const fetchUser = createAsyncThunk('profile/fetchUser', async (id) => {
    try {
        const response = await fetch(`/api/users/profile/${id}`); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        return (data)

    } catch (error) {
        // Handle errors if the request fails.
        console.error('Error fetching user data:', error);
    }
})

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }


})

export default profileSlice.reducer