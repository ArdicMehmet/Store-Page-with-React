import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  products:[],
  filteredProducts:[],
  choosenProduct : false,
  filter : '',
  isLoading: false,
  error : false,
}

export const getAllProducts = createAsyncThunk('products',async ()=>{   
    const response = await axios.get('https://fakestoreapi.com/products?limit=30');
    return response.data;    
})
export const getProductsById = createAsyncThunk('product',async (id)=>{   
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;    
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter : (state, action) =>{
        state.filter = action.payload
        state.filteredProducts = state.filter ? state.products.filter((product)=>product.category == state.filter) : state.products;
        state.choosenProduct = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.filteredProducts = action.payload;
        state.products;
        state.products = action.payload;
        state.isLoading = false;
        state.choosenProduct = false
        
    },)
    builder.addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error=action.error
    })
    builder.addCase(getProductsById.fulfilled,(state,action)=>{
        state.choosenProduct = action.payload;
        state.isLoading = false;
    })
    builder.addCase(getProductsById.pending,(state,action)=>{
        state.isLoading = true;
        state.error = false;
    })
    builder.addCase(getProductsById.rejected,(state,action)=>{
      state.error=action.error
      state.isLoading = false;
    })
  },
})
export const { setFilter } = productSlice.actions

export default productSlice.reducer