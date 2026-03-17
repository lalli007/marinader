import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()

  if (
    username === process.env.SITE_USERNAME &&
    password === process.env.SITE_PASSWORD
  ) {
    const response = NextResponse.json({ ok: true })
    response.cookies.set('auth', process.env.AUTH_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })
    return response
  }

  return NextResponse.json(
    { error: 'Feil brukernavn eller passord' },
    { status: 401 }
  )
}
