import { Optional, OptionalOrMissing } from '../../types/sharedTypes';

export const isDefined = <T>(arg: T | null | undefined): arg is T => arg !== null && arg !== undefined;

export const getEnumByValue = <T>(list: Record<string, string>, value: OptionalOrMissing<string>): Optional<T> => {
  if (!isDefined(value)) {
    return null;
  }

  for (const enum_value of Object.values(list)) {
    if (enum_value === value) {
      return enum_value as unknown as T;
    }
  }
  return null;
};

export const capitalizeFirst = (input: string) => {
  if (!isDefined(input)) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
};

export const capitalizeFirstOfEach = (input: string) => {
  if (!isDefined(input)) {
    return '';
  }
  return input
    .split(' ')
    .map((word) => {
      return capitalizeFirst(word);
    })
    .join(' ');
};

export const extractFirstOfEach = (input: string) => {
  if (!isDefined(input)) {
    return '';
  }
  return input
    .split(' ')
    .map((word) => {
      return word.charAt(0);
    })
    .join(' ');
};

interface SetShortTextParams {
  text: string | undefined | null;
  length: number;
  defaultValue?: string;
}

export const setShortText = ({ text, length, defaultValue }: SetShortTextParams) => {
  return !isDefined(text) ? defaultValue : text.length > length ? text.substring(0, length) + '...' : text;
};
