import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  products:[],
  filteredProducts:[],
  choosenProduct : false,
  basketProductList : [],
  filter : '',
  isLoading: false,
  error : false,
  isShowBasketModal : false,
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
    },
    setBasketModal : (state)=>{
      state.isShowBasketModal = !state.isShowBasketModal;
    },
    setBasketProductList: (state,action)=>{
      let isInclude = false;
      const {id, title, price} = action.payload;
      state.basketProductList.forEach(product => {
        if(product.id == id ){
          isInclude = true;
          product.quantity++;
          state.basketProductList = [...state.basketProductList];
        }
      })
      !isInclude && id ? state.basketProductList = [...state.basketProductList, {id, title, price, quantity:1}] : null;
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
export const { setFilter, setBasketModal, setBasketProductList } = productSlice.actions

export default productSlice.reducer