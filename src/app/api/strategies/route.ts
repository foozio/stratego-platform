import { NextResponse } from 'next/server';

// Mock data for strategies
const strategies = [
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

// GET /api/strategies
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  
  // Filter strategies by status if provided
  const filteredStrategies = status 
    ? strategies.filter(strategy => strategy.status === status)
    : strategies;
  
  return NextResponse.json({
    success: true,
    data: filteredStrategies,
    count: filteredStrategies.length,
  });
}

// POST /api/strategies
export async function POST(request: Request) {
  const body = await request.json();
  
  // In a real application, you would:
  // 1. Validate the request body
  // 2. Check user permissions
  // 3. Save to database
  // 4. Return the created strategy
  
  const newStrategy = {
    id: `${strategies.length + 1}`,
    ...body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  // Add to our mock data (in real app, this would be saved to database)
  strategies.push(newStrategy);
  
  return NextResponse.json({
    success: true,
    data: newStrategy,
  }, { status: 201 });
}