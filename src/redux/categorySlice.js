import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  categories:[],
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
    })
    builder.addCase(getAllCategories.pending, (state, action) => {
        console.log("Categories is pulling");
      })
    builder.addCase(getAllCategories.rejected, (state, action) => {
        console.log("Hata");
      })
  },
})

export default categorySlice.reducer