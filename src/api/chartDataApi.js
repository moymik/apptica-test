// Функция для форматирования даты в 'YYYY-MM-DD'
const formatDateToApi = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const fetchChartDataApi = async (
    countryId,
    dateFrom = null, // Если не передано, будет 30 дней назад
    dateTo = null,   // Если не передано, будет текущая дата
    platforms = 1
) => {
  // Если dateFrom и dateTo не указаны, используем последние 30 дней
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);

  // Форматируем даты
  const defaultDateFrom = formatDateToApi(thirtyDaysAgo);
  const defaultDateTo = formatDateToApi(today);

  // Используем переданные даты или дефолтные
  const from = dateFrom || defaultDateFrom;
  const to = dateTo || defaultDateTo;

  // Формируем URL с параметрами
  const url = new URL(`https://api.apptica.com/package/top_history/9379/${countryId}`);

  // Добавляем query-параметры
  url.searchParams.append('date_from', from);
  url.searchParams.append('date_to', to);
  url.searchParams.append('platforms', platforms);
  url.searchParams.append('B4NKGg', 'fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l');

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch chart data. Status: ${response.status}`);
  }

  return response.json();
};