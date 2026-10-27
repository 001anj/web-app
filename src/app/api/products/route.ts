import { NextResponse } from 'next/server';

const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, stock: 15 },
  { id: 2, name: 'Smart Watch', price: 199.99, stock: 5 },
  { id: 3, name: 'Bluetooth Speaker', price: 49.99, stock: 30 }
];

export async function GET() {
  return NextResponse.json(PRODUCTS, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Custom-Header': 'Playwright-Test'
    }
  });
}
