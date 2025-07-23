// hooks/useTopHistoryData.js
import { useState, useEffect } from 'react';
import { fetchCountriesApi, fetchChartDataApi } from '../api  ';

export const useTopHistoryData = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Загрузка стран
  useEffect(() => {
    const loadCountries = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountriesApi();
        setCountries(data);
        setSelectedCountry(data[0]?.id); // Первая страна по умолчанию
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCountries();
  }, []);

  // Загрузка данных графика
  useEffect(() => {
    if (!selectedCountry) return;

    const loadChartData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchChartDataApi(selectedCountry);
        setChartData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadChartData();
  }, [selectedCountry]);

  return {
    countries,
    selectedCountry,
    chartData,
    isLoading,
    error,
    onCountryChange: setSelectedCountry,
  };
};