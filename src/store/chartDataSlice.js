import {createSlice} from '@reduxjs/toolkit';
import {fetchChartDataApi} from '../api/chartDataApi.js';

const initialState = {
  chartData: {},
  loading: false,
  error: null,
};

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    fetchChartDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchChartDataSuccess(state, action) {
      state.chartData = action.payload.chartData;
      state.loading = false;
    },
    fetchChartDataFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const {
  fetchChartDataStart, fetchChartDataSuccess,
  fetchChartDataFailure
} = chartDataSlice.actions;

export const fetchChartData = (countryId) => async (dispatch) => {
  try {
    dispatch(fetchChartDataStart());
    const response = await fetchChartDataApi(countryId);
    dispatch(fetchChartDataSuccess({chartData: response.data, countryId: countryId}));
  } catch (error) {
    dispatch(fetchChartDataFailure(error.message));
  }
};

export default chartDataSlice.reducer;