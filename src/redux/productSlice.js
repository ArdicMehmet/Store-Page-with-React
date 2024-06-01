import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  products:[],
  filteredProducts:[],
  choosenProduct : {},
  filter:"",
  loading: false,
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.filteredProducts = action.payload;
        state.products;
        state.products = action.payload;
        state.loading = "false";
    },)
    builder.addCase(getAllProducts.pending, (state, action) => {
        state.loading = "true";
      })
    builder.addCase(getAllProducts.rejected, (state, action) => {
        state.loading= 'Hata';
    })
    builder.addCase(getProductsById.fulfilled,(state,action)=>{
        state.choosenProduct = action.payload;
    })
    builder.addCase(getProductsById.pending,(state,action)=>{
        //Bekliyor
    })
    builder.addCase(getProductsById.rejected,(state,action)=>{
        // Hata
    })
  },
})
export const { setFilter } = productSlice.actions

export default productSlice.reducer