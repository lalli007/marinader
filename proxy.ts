import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const auth = request.cookies.get('auth')?.value

  if (auth === process.env.AUTH_SECRET) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/((?!login|api/login|_next|favicon.ico).*)'],
}
