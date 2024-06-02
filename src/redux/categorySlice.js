import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  categories:[],
  isLoading:false,
  error:false,
}

export const getAllCategories = createAsyncThunk('categories',async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
})

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.isLoading=false
    })
    builder.addCase(getAllCategories.pending, (state, action) => {
        state.isLoading=true;
        state.error= false;
      })
    builder.addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading=false
        state.error=action.error
      })
  },
})

export default categorySlice.reducer