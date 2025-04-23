import he from 'he';

export function unescapeHtml(str: string) {
  return he.decode(str);
}

export function unescapeHtmlDeep<T>(obj: T): T {
  if (typeof obj === 'string') {
    return unescapeHtml(obj) as T;
  }

  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      return obj.map(unescapeHtmlDeep) as T;
    }

    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) =>
          [key, unescapeHtmlDeep(value)],
        ),
    ) as T;
  }

  return obj;
}