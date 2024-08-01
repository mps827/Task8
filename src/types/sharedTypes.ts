export type Optional<T> = T | null;
export type OptionalOrMissing<T> = T | null | undefined;

export interface Option {
  value: string;
  title: string;
  disable?: boolean;
  selected?: boolean;
}

export interface AdvertisementType {
  id?: string;
  title: string;
  propertyType: string;
  propertyArea: string;
  space: string;
  floor: string;
  room: string;
  elevator: boolean;
  parking: boolean;
  warehouse: boolean;
  creation_year: string;
  description: string;
  ownerFirstName: string;
  ownerLastName: string;
  ownerFatherName: string;
  ownerNationalId: string;
  quota: string;
  createdAt?: string;
  publishDate?: string;
  publishStatus?: string;
}
export interface Range {
  min: number;
  max: number;
}
export interface FilterType {
  key: string;
  name: string;
}

export const SortTypes: Array<Option> = [
  { title: "پربازدید ترین", value: "MostViewed" },
  { title: "جدید ترین", value: "Latest" },
  { title: "گران ترین", value: "MostExpensive" },
  { title: "ارزان ترین", value: "Cheapest" },
  { title: "بیشترین متراژ", value: "MostSurface" },
  { title: "کمترین متراژ", value: "LeastSurface" },
];