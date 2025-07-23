export const fetchCountriesApi = async () => {
  const response = await fetch(
      'https://api.apptica.com/v1/geo?B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l'
  );
  if (!response.ok) throw new Error('Failed to fetch countries');
  return response.json();
};