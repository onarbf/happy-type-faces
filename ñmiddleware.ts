import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from '@/app/constants/locale';

export  default function middleware(request: NextRequest) {
  const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
  localePrefix: 'as-needed'
});
const response = intlMiddleware(request)
response.headers.set('x-url', request.nextUrl.pathname)

if(!request.cookies.get('NEXT_THEME')){
  response.cookies.set('NEXT_THEME','default')

}
return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)']
};