import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';

const CACHE_KEY = 'products_cache';
const CACHE_EXPIRATION = 60 * 60 * 1000;

const loadFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) {
      return null;
    }

    const { data, timestamp } = JSON.parse(raw);
    const expired = Date.now() - timestamp > CACHE_EXPIRATION;
    return expired ? null : data;
  } catch {
    return null;
  }
};

const saveToLocalStorage = data => {
  localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
};

export const fetchProducts = createAsyncThunk('products/fetch', async (_, { rejectWithValue }) => {
  const cached = loadFromLocalStorage();
  if (cached) {
    return cached;
  }

  try {
    const data = await getProducts();
    saveToLocalStorage(data);
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data || 'Error al cargar productos');
  }
});

const initialState = {
  items: [],
  status: 'idle',
  searchTerm: ''
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  }
});

export const { setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
