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

export const GET = async (req: any, { params }: any) => {
  return REST_GET(config)(req, { params: await params })
}

export const POST = async (req: any, { params }: any) => {
  return REST_POST(config)(req, { params: await params })
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
