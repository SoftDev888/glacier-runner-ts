export function counts(text: string): Map<string, number> {
  const found = new Map<string, number>();
  for (const one of text) found.set(one, (found.get(one) ?? 0) + 1);
  return found;
}

console.log(counts('abracadabra'));
