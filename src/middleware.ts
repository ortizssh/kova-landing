import { NextRequest, NextResponse } from 'next/server';

// Spanish-speaking countries (ISO 3166-1 alpha-2)
const SPANISH_COUNTRIES = new Set([
  'MX', 'ES', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU',
  'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ',
]);

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Only set if user hasn't manually chosen a locale
  if (req.cookies.get('kova_locale')) return res;

  const country = req.headers.get('x-vercel-ip-country') || '';
  const locale = SPANISH_COUNTRIES.has(country) ? 'es' : 'en';

  res.cookies.set('kova_locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return res;
}

export const config = {
  matcher: '/',
};
