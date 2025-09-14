import { NextResponse } from 'next/server';
import { strategies } from './data';

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
