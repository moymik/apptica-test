import { createSlice } from '@reduxjs/toolkit';
import { fetchCountriesApi } from '../api/countriesApi.js';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchCountriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCountriesSuccess(state, action) {
      state.countries = action.payload.data;
      state.loading = false;
    },
    fetchCountriesFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { fetchCountriesStart, fetchCountriesSuccess, fetchCountriesFailure } = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  try {
    dispatch(fetchCountriesStart());
    const data = await fetchCountriesApi();
    dispatch(fetchCountriesSuccess(data));
  } catch (error) {
    dispatch(fetchCountriesFailure(error.message));
  }
};

export default countriesSlice.reducer;