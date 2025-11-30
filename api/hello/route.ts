import { NextResponse } from 'next/server';

/**
 * Example API route
 * Access at /api/hello
 */
export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' });
}

