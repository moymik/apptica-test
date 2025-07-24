import {createSlice} from '@reduxjs/toolkit';
import {fetchChartDataApi} from '../api/chartDataApi.js';

const initialState = {
  data: {},
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
      state.data = action.payload.data;
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
    dispatch(fetchChartDataSuccess({data: response.data, countryId: countryId}));
  } catch (error) {
    dispatch(fetchChartDataFailure(error.message));
  }
};

export default chartDataSlice.reducer;