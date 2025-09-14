// Utility functions for interacting with the API

export interface Strategy {
  id: string;
  title: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  ownerId: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
}

// Fetch all strategies
export async function getStrategies(status?: string): Promise<ApiResponse<Strategy[]>> {
  const url = status ? `/api/strategies?status=${status}` : '/api/strategies';
  const response = await fetch(url);
  return response.json();
}

// Create a new strategy
export async function createStrategy(strategy: Omit<Strategy, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Strategy>> {
  const response = await fetch('/api/strategies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(strategy),
  });
  return response.json();
}

// Fetch a single strategy by ID
export async function getStrategy(id: string): Promise<ApiResponse<Strategy>> {
  const response = await fetch(`/api/strategies/${id}`);
  return response.json();
}

// Update a strategy
export async function updateStrategy(id: string, strategy: Partial<Strategy>): Promise<ApiResponse<Strategy>> {
  const response = await fetch(`/api/strategies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(strategy),
  });
  return response.json();
}

// Delete a strategy
export async function deleteStrategy(id: string): Promise<ApiResponse<null>> {
  const response = await fetch(`/api/strategies/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}