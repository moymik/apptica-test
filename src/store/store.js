import {configureStore} from '@reduxjs/toolkit'
import countriesSlice from "./countriesSlice.js"
import categoriesSlice from "./categoriesSlice.js";
import chartDataSlice from "./chartDataSlice.js";

export default configureStore({
  reducer: {
    countries: countriesSlice,
    categories: categoriesSlice,
    chartData: chartDataSlice,
  },
})