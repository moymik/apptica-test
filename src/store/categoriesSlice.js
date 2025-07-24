import { createSlice } from '@reduxjs/toolkit';
import {fetchCategoriesApi} from '../api/categoriesApi.js';

const initialState = {
  categoriesMap: {},
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess(state, action) {
      const categoriesData = action.payload.data;

      // Создаем мапу id → name
      const categoriesMap = {};
      categoriesData.forEach(group => {
        // Добавляем основную группу
        categoriesMap[group.id] = group.name;

        // Добавляем все подкатегории
        group.categories?.forEach(category => {
          categoriesMap[category.id] = category.name;
        });
      });

      state.categoriesMap = categoriesMap;
      state.loading = false;
    },
    fetchCategoriesFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const { fetchCategoriesStart, fetchCategoriesSuccess,
  fetchCategoriesFailure } = countriesSlice.actions;

export const fetchCategories= () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    const data = await fetchCategoriesApi();
    dispatch(fetchCategoriesSuccess(data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};

export default countriesSlice.reducer;