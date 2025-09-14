// Shared mock data for strategies across API routes

export interface Strategy {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'planned' | 'completed' | string;
  startDate: string;
  endDate: string;
  ownerId: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export const strategies: Strategy[] = [
  {
    id: '1',
    title: 'Digital Transformation 2023',
    description: 'Comprehensive digital transformation initiative',
    status: 'active',
    startDate: '2023-01-15',
    endDate: '2023-12-31',
    ownerId: 'user1',
    organizationId: 'org1',
    createdAt: '2023-01-10T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z',
  },
  {
    id: '2',
    title: 'Market Expansion - APAC',
    description: 'Entering new markets in Asia Pacific',
    status: 'planned',
    startDate: '2023-10-01',
    endDate: '2024-06-30',
    ownerId: 'user2',
    organizationId: 'org1',
    createdAt: '2023-05-20T00:00:00Z',
    updatedAt: '2023-05-20T00:00:00Z',
  },
  {
    id: '3',
    title: 'Customer Experience Platform',
    description: 'New platform for customer interactions',
    status: 'completed',
    startDate: '2022-09-01',
    endDate: '2023-06-30',
    ownerId: 'user3',
    organizationId: 'org1',
    createdAt: '2022-08-15T00:00:00Z',
    updatedAt: '2023-07-01T00:00:00Z',
  },
];

export function findStrategy(id: string) {
  return strategies.find((s) => s.id === id);
}

export function updateStrategy(id: string, patch: Partial<Strategy>) {
  const idx = strategies.findIndex((s) => s.id === id);
  if (idx === -1) return undefined;
  strategies[idx] = {
    ...strategies[idx],
    ...patch,
    id, // ensure id stays stable
    updatedAt: new Date().toISOString(),
  };
  return strategies[idx];
}

export function deleteStrategy(id: string) {
  const idx = strategies.findIndex((s) => s.id === id);
  if (idx === -1) return false;
  strategies.splice(idx, 1);
  return true;
}

