import {useSelector} from "react-redux";
import './App.css'

import TopHistoryWidget from "./components/TopHistoryWidget/index.jsx";
import DataStatus from "./components/DataStatus.jsx"
import {useLoadData} from "./hooks/useLoadData.js";
import {fetchChartData} from "./store/chartDataSlice.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
  useLoadData(); // Загрузка данных

  const dispatch = useDispatch();
  const {shouldRender, loading, error, countriesData, categoriesData} = useSelector(
      selectCombinedData,
      combinedDataEqualityCheck
  );


  const chartData = useSelector(state => state.chartData);

  const handleCountrySelection = (countryId) => {
    dispatch(fetchChartData(countryId));
  };

  // Первоначальная загрузка данных для графика
  useEffect(() => {
    if(countriesData?.length>0){
      handleCountrySelection(countriesData[0].id);
      console.log("initial chartData Loaded")
    }
  }, [countriesData,dispatch]);

  return (
      <div className="app">
        <header className="app-header">TopHistoryWidget example</header>
        <main className="app-main">
          <DataStatus loading={loading} error={error}/>
          {shouldRender && (
              <TopHistoryWidget
                  countries={countriesData}
                  categoriesMap={categoriesData}
                  onSelectionChanged={handleCountrySelection}
                  chartData={chartData}
              />
          )}
        </main>
      </div>
  );
}


const selectCombinedData = (state) => {
  const countries = state.countries;
  const categories = state.categories;

  return {
    shouldRender: !countries.loading && !categories.loading && !countries.error && !categories.error,
    loading: countries.loading || categories.loading,
    error: countries.error || categories.error,
    countriesData: countries.countries,
    categoriesData: categories.categoriesMap
  };
};

// Функция сравнения
const combinedDataEqualityCheck = (prev, next) => (
    prev.loading === next.loading &&
    prev.error === next.error &&
    prev.shouldRender === next.shouldRender
);


export default App;
