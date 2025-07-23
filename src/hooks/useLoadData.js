// hooks/useLoadData.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchCountries} from "../store/countriesSlice.js";
import { fetchCategories } from '../store/categoriesSlice.js';

export const useLoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchCategories());
  }, [dispatch]);
};