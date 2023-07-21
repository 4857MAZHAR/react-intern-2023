import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isloading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isloading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isloading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isloading = false;
    });
  },
});

export default slice.reducer;
