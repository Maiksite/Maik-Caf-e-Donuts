/**
 * Holiday detection for São Paulo - SP, Brazil.
 * Covers National Brazilian holidays, São Paulo State holidays, and São Paulo Municipal holidays,
 * as well as mobile holidays (Easter, Carnival, Good Friday, Corpus Christi).
 */

export interface HolidayInfo {
  isHoliday: boolean;
  name?: string;
}

/**
 * Anonymous Gregorian algorithm for calculating Easter Sunday
 */
export function getEasterDate(year: number): { month: number; day: number } {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

/**
 * Returns a map of MM-DD -> Holiday Name for São Paulo/SP for the given year
 */
export function getSaoPauloHolidaysForYear(year: number): Map<string, string> {
  const map = new Map<string, string>();

  // Fixed National, State & Municipal SP holidays (month: 1-12)
  const fixed: Array<{ month: number; day: number; name: string }> = [
    { month: 1, day: 1, name: 'Confraternização Universal (Ano Novo)' },
    { month: 1, day: 25, name: 'Aniversário de São Paulo' },
    { month: 4, day: 21, name: 'Tiradentes' },
    { month: 5, day: 1, name: 'Dia do Trabalho' },
    { month: 7, day: 9, name: 'Revolução Constitucionalista (SP)' },
    { month: 9, day: 7, name: 'Independência do Brasil' },
    { month: 10, day: 12, name: 'Nossa Senhora Aparecida' },
    { month: 11, day: 2, name: 'Finados' },
    { month: 11, day: 15, name: 'Proclamação da República' },
    { month: 11, day: 20, name: 'Dia da Consciência Negra' },
    { month: 12, day: 25, name: 'Natal' },
  ];

  for (const h of fixed) {
    const key = `${String(h.month).padStart(2, '0')}-${String(h.day).padStart(2, '0')}`;
    map.set(key, h.name);
  }

  // Mobile holidays calculated from Easter Sunday
  const { month: easterMonth, day: easterDay } = getEasterDate(year);
  const easter = new Date(year, easterMonth - 1, easterDay);

  const addDays = (d: Date, n: number) => {
    const res = new Date(d);
    res.setDate(res.getDate() + n);
    return res;
  };

  const toKey = (d: Date) =>
    `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  const carnaval = addDays(easter, -47); // Terça-feira de Carnaval
  const sextaSanta = addDays(easter, -2); // Sexta-feira Santa (Paixão de Cristo)
  const corpusChristi = addDays(easter, 60); // Corpus Christi (Feriado Municipal SP)

  map.set(toKey(carnaval), 'Carnaval');
  map.set(toKey(sextaSanta), 'Sexta-feira Santa (Paixão de Cristo)');
  map.set(toKey(easter), 'Páscoa');
  map.set(toKey(corpusChristi), 'Corpus Christi');

  return map;
}

/**
 * Checks if a given year, month (1-12) and day is an official holiday in São Paulo/SP.
 */
export function isHoliday(year: number, month: number, day: number): HolidayInfo {
  const holidays = getSaoPauloHolidaysForYear(year);
  const key = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const holidayName = holidays.get(key);

  if (holidayName) {
    return { isHoliday: true, name: holidayName };
  }
  return { isHoliday: false };
}
