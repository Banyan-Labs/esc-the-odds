/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT
} from '@payloadcms/next/routes'
import config from '@payload-config'

/**
 * Firebase Hosting strips all cookies except `__session`.
 * After Payload sets `payload-token`, copy its value to `__session`
 * so it survives Firebase's CDN on subsequent requests.
 */
function copyPayloadCookieToSession(response: Response): Response {
  const setCookies = response.headers.getSetCookie()
  const payloadCookie = setCookies.find((c) => c.startsWith('payload-token='))
  if (payloadCookie) {
    const tokenValue = payloadCookie.split('=')[1]?.split(';')[0]
    if (tokenValue) {
      const isLogout = tokenValue === '' || payloadCookie.includes('Max-Age=0')
      const sessionCookie = isLogout
        ? `__session=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`
        : `__session=${tokenValue}; Path=/; HttpOnly; Secure; SameSite=Lax`
      response.headers.append('Set-Cookie', sessionCookie)
    }
  }
  return response
}

export const GET = async (req: any, { params }: any) => {
  const response = await REST_GET(config)(req, { params: await params })
  return copyPayloadCookieToSession(response)
}

export const POST = async (req: any, { params }: any) => {
  const response = await REST_POST(config)(req, { params: await params })
  return copyPayloadCookieToSession(response)
}

export const PATCH = async (req: any, { params }: any) => {
  return REST_PATCH(config)(req, { params: await params })
}

export const DELETE = async (req: any, { params }: any) => {
  return REST_DELETE(config)(req, { params: await params })
}

export const PUT = async (req: any, { params }: any) => {
  return REST_PUT(config)(req, { params: await params })
}

export const OPTIONS = async (req: any, { params }: any) => {
  return REST_OPTIONS(config)(req, { params: await params })
}
