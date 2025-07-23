import { useSelector} from "react-redux";
import './App.css'

import TopHistoryWidget from "./components/TopHistoryWidget/index.jsx";
import DataStatus from "./components/DataStatus.jsx"
import {useLoadData} from "./hooks/useLoadData.js";

function App() {
  useLoadData(); // Загрузка данных

  const {shouldRender, loading, error, countriesData, categoriesData} = useSelector(
      selectCombinedData,
      combinedDataEqualityCheck
  );

  return (
      <div className="app">
        <header className="app-header">TopHistoryWidget example</header>
        <main className="app-main">
          <DataStatus loading={loading} error={error}/>
          {shouldRender && (
              <TopHistoryWidget
                  countries={countriesData}
                  categories={categoriesData}
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
    categoriesData: categories.categories
  };
};

// Функция сравнения
const combinedDataEqualityCheck = (prev, next) => (
    prev.loading === next.loading &&
    prev.error === next.error &&
    prev.shouldRender === next.shouldRender
);


export default App;
