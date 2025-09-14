import { NextResponse } from 'next/server';
import { findStrategy, updateStrategy as updateOne, deleteStrategy as deleteOne } from '../data';

// GET /api/strategies/:id
export async function GET(_: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const strategy = findStrategy(id);
  if (!strategy) {
    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: strategy });
}

// PUT /api/strategies/:id
export async function PUT(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const patch = await request.json();
  const updated = updateOne(id, patch);
  if (!updated) {
    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: updated });
}

// DELETE /api/strategies/:id
export async function DELETE(_: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const ok = deleteOne(id);
  if (!ok) {
    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: null });
}

