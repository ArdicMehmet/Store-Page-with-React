import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import categoryReducer from './categorySlice'


// Redux Logger kullan
export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
})