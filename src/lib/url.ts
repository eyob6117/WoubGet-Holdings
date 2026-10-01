// Prefix a site-relative path with the configured base (e.g. /WoubGet-Holdings on GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`;
