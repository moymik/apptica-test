export const fetchCategoriesApi = async () => {
  const response = await fetch(
      'https://api.apptica.com/v1/applicationCategory?platform=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l'
  );
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
};