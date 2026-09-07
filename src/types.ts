export type ProductCategory = 
  | 'Todos'
  | 'Donuts Roscas'
  | 'Donuts Gelados'
  | 'Combos'
  | 'Cafés'
  | 'Achocolatados'
  | 'Milkshakes'
  | 'Sodas Italianas'
  | 'Bebidas';

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'Todos'>;
  description?: string;
  price?: string;
  imageUrl: string;
  ifoodUrl?: string;
}

export interface StoreHourEntry {
  dayName: string;
  dayIndex?: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday (optional for Feriados)
  openTime: string;
  closeTime: string;
  isClosed: boolean;
  isHoliday?: boolean;
  activeDays?: number[];
}

export interface StoreStatus {
  status: 'open' | 'closing-soon' | 'closed';
  isOpen: boolean;
  isHoliday: boolean;
  holidayName?: string;
  openingTime: string;
  closingTime: string;
  statusText: string;
  subtext: string;
  formattedCurrentTime: string;
  currentDayIndex: number;
}

export interface NearbyPlace {
  id: string;
  name: string;
  referenceText: string;
  type: string;
  originAddress: string;
  mapsUrl: string;
  estimatedDistanceText?: string;
}
