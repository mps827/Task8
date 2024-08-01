export const numberWithCommas = (value: number | string): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function removeCommas(formattedNumber: String): number {
  return Number(formattedNumber.replace(/,/g, ""));
}
