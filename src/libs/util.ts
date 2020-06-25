export function handleArrayInput(iv: string, cb: (el: string) => any): string {
  const inputArray: string[] = iv.split(/\s+/);
  return inputArray.reduce((acc: string, i: string) => {
    let space = acc.length ? " " : "";
    acc += space + cb(i);
    return acc;
  }, "");
}