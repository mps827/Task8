export const isValidIranianNationalCode = (input: string | undefined) => {
  // Check if the input is a 10-digit number
  if (input!.length !== 10 || /(\d)(\1){9}/.test(input!)) return false;

  let sum = 0,
    chars = input!.split(''),
    lastDigit,
    remainder;

  for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

  remainder = sum % 11;
  lastDigit = remainder < 2 ? remainder : 11 - remainder;

  return +chars[9] === lastDigit;
};
export const isValidEconomicCode = (code: string | undefined) => {
  var L = code!.length;

  if (L < 11 || parseInt(code!, 10) == 0) return false;

  if (parseInt(code!.substr(3, 6), 10) == 0) return false;
  var c = parseInt(code!.substr(10, 1), 10);
  var d = parseInt(code!.substr(9, 1), 10) + 2;
  var z = new Array(29, 27, 23, 19, 17);
  var s = 0;
  for (var i = 0; i < 10; i++) s += (d + parseInt(code!.substr(i, 1), 10)) * z[i % 5];
  s = s % 11;
  if (s == 10) s = 0;
  return c == s;
};

var mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
  junkReg = /[^\d]/gi,
  persinNum = [/۰/gi, /۱/gi, /۲/gi, /۳/gi, /۴/gi, /۵/gi, /۶/gi, /۷/gi, /۸/gi, /۹/gi];
export const num2en = (str: string) => {
  for (var i: number = 0; i < 10; i++) {
    str = str.replace(persinNum[i], String(i));
  }
  return str;
};
export const getMobiles = (str: string) => {
  var mobiles = num2en(str + '').match(mobileReg) || [];
  mobiles.forEach(function (value, index, arr) {
    arr[index] = value.replace(junkReg, '');
    arr[index][0] === '0' || (arr[index] = '0' + arr[index]);
  });
  return mobiles.length ? true : false;
};

export const numberInput = (str: string) => {
  var p = /^[۰۱۲۳۴۵۶۷۸۹ 0-9]+$/;
  return !p.test(str) ? true : false
}

