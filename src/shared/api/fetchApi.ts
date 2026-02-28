const getApiBaseUrl = () => import.meta.env.VITE_API_URL ?? '/api';

export const fetchApi = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(`${getApiBaseUrl()}${endpoint}`, {
    credentials: 'include',
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};
