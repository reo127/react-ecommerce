import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLogin: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
}

export const register = createAsyncThunk("registeruser", async({name, email, password})=> {

})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: ()=> {
  }
})

export default authSlice.reducer