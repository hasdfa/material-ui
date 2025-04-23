import { ExcludeItems } from "../types";

export default function exclude(filePath: string, items: ExcludeItems | null | undefined) {
  if (!items) { return false; }

  return items.some((item) => {
    if (typeof item === 'string') {
      return filePath.endsWith(item);
    }

    return item.test(filePath);
  });
}
