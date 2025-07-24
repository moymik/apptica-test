export const fetchChartDataApi = async (countryId,
                                        dateFrom = '2025-07-20',
                                        dateTo = '2025-07-24',
                                        platforms = 1) => {
  // Формируем URL с параметрами
  const url = new URL(`https://api.apptica.com/package/top_history/9379/${countryId}`);

  // Добавляем query-параметры
  url.searchParams.append('date_from', dateFrom);
  url.searchParams.append('date_to', dateTo);
  url.searchParams.append('platforms', platforms);
  url.searchParams.append('B4NKGg', 'fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l');
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch countries data. Status: ${response.status}`);
  }

  return response.json();
};