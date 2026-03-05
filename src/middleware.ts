import { NextRequest, NextResponse } from 'next/server'

/**
 * Firebase Hosting strips all cookies except `__session` from incoming requests.
 * Payload CMS uses `payload-token` for auth cookies, which gets stripped.
 *
 * This middleware reads the `__session` cookie and injects it as the
 * Authorization header so Payload can authenticate the request.
 */
export function middleware(request: NextRequest) {
  const session = request.cookies.get('__session')?.value

  if (session) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('Authorization', `JWT ${session}`)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
}
