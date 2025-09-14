// Custom hooks for data fetching

import useSWR from 'swr';
import { getStrategies, Strategy, ApiResponse } from './api';

// SWR fetcher function
const fetcher = (url: string) => fetch(url).then(res => res.json());

// Hook to fetch all strategies
export function useStrategies(status?: string) {
  const { data, error, isLoading, mutate } = useSWR<ApiResponse<Strategy[]>>(
    status ? `/api/strategies?status=${status}` : '/api/strategies',
    fetcher
  );
  
  return {
    strategies: data?.data || [],
    count: data?.count || 0,
    isLoading,
    isError: error,
    mutate,
  };
}

// Hook to fetch a single strategy
export function useStrategy(id: string) {
  const { data, error, isLoading, mutate } = useSWR<ApiResponse<Strategy>>(
    id ? `/api/strategies/${id}` : null,
    fetcher
  );
  
  return {
    strategy: data?.data,
    isLoading,
    isError: error,
    mutate,
  };
}