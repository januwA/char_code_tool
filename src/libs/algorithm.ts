/**
 * unicode转数字字符串
 * @param inputString
 * @param hook
 */
export function code2char(inputString: string, hook: number): string {
  return inputString
    .split(/\s+/)
    .filter((it) => !!it)
    .reduce((acc, it) => {
      acc += String.fromCharCode(parseInt(it, hook));
      return acc;
    }, "");
}

/**
 * 字符串转unicode数字
 * @param inputString
 * @param hook
 */
export function char2code(inputString: string, hook: number): string {
  return inputString.split("").reduce((acc, it: any) => {
    acc += it.codePointAt(0).toString(hook) + " ";
    return acc;
  }, "");
}

/**
 * 16进制转单浮点
 * @param hex
 */
export function hex2SingleFloatingPoint(hex: string): number {
  // https://blog.csdn.net/qq_19286023/article/details/72651568
  const data_bit = parseInt(hex, 16).toString(2); //16进制转2进制
  const data_E = parseInt(data_bit.slice(0, 8), 2); //slice表示数组的截取，并转化为十进制数
  const data_M: string = data_bit.slice(8, 64);
  var data_M_10 = 0.0;
  for (var i = 0; i < data_M.length; i++) {
    data_M_10 = data_M_10 + Number(data_M[i]) * Math.pow(2, -1 * (i + 1));
  }
  return Math.pow(2, data_E - 127) * (1 + data_M_10);
}

/**
 * 负数转无符号位
 * @param num
 */
export function negative2unsignedBit(num: number): number {
  return 2 ** 32 - Math.abs(Number(num));
}

/**
 * 无符号位转负数
 * @param num
 */
export function unsignedBit2negative(num: number): number {
  return  Number(num) - 2 ** 32;
}
