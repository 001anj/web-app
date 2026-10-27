import { NextResponse } from 'next/server';

let users: any[] = [];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }
    
    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name: data.name,
      email: data.email,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
