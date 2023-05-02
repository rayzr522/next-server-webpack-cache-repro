import { NextResponse, type NextRequest } from 'next/server'

export function getMyCookie(request: NextRequest) {
  return request.cookies.get('mycookie')?.value
}

export function incrementCookie(
  response: NextResponse,
  currentValue?: string | undefined
) {
  response.cookies.set({
    name: 'mycookie',
    value: `${+(currentValue ?? '0') + 1}`,
  })
}

export function createCookieIncrement() {
  return function handler(request: NextRequest) {
    const cookieValue = getMyCookie(request)
    const response = NextResponse.json({
      cookie: cookieValue,
    })
    incrementCookie(response, cookieValue)
    return response
  }
}
