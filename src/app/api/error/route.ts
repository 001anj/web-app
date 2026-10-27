import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate a random or deliberate server error
  return NextResponse.json(
    { error: 'Internal Server Error', message: 'Database connection failed' }, 
    { status: 500 }
  );
}
