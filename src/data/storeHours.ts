import { StoreHourEntry, StoreStatus } from '../types';
import { isHoliday } from './holidays';

/**
 * Única fonte de verdade para os horários oficiais de funcionamento da Maik Café e Donuts
 */
export const openingHours = {
  monday:    { open: '07:30', close: '19:00' },
  tuesday:   { open: '07:30', close: '19:00' },
  wednesday: { open: '07:30', close: '19:00' },
  thursday:  { open: '07:30', close: '19:00' },
  friday:    { open: '07:30', close: '20:00' },
  saturday:  { open: '10:00', close: '18:00' },
  sunday:    { open: '10:00', close: '16:00' },
  holiday:   { open: '10:00', close: '16:00' },
};

/**
 * Estrutura para apresentação visual compacta na seção de Horários de Funcionamento
 */
export const STORE_HOURS: StoreHourEntry[] = [
  {
    dayName: 'Segunda a Quinta',
    openTime: '07:30',
    closeTime: '19:00',
    isClosed: false,
    activeDays: [1, 2, 3, 4],
  },
  {
    dayName: 'Sexta-feira',
    dayIndex: 5,
    openTime: '07:30',
    closeTime: '20:00',
    isClosed: false,
    activeDays: [5],
  },
  {
    dayName: 'Sábado',
    dayIndex: 6,
    openTime: '10:00',
    closeTime: '18:00',
    isClosed: false,
    activeDays: [6],
  },
  {
    dayName: 'Domingo',
    dayIndex: 0,
    openTime: '10:00',
    closeTime: '16:00',
    isClosed: false,
    activeDays: [0],
  },
  {
    dayName: 'Feriados',
    openTime: '10:00',
    closeTime: '16:00',
    isClosed: false,
    isHoliday: true,
  },
];

/**
 * Retorna data, dia da semana e horário preciso no fuso horário America/Sao_Paulo
 */
export function getSaoPauloDateTime(date: Date = new Date()): {
  year: number;
  month: number;
  day: number;
  dayIndex: number; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  hours: number;
  minutes: number;
  seconds: number;
  formattedTime: string;
} {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const parts = Object.fromEntries(
    dtf.formatToParts(date).map((p) => [p.type, p.value])
  );

  const year = parseInt(parts.year, 10);
  const month = parseInt(parts.month, 10);
  const day = parseInt(parts.day, 10);
  const hours = parseInt(parts.hour, 10) % 24;
  const minutes = parseInt(parts.minute, 10);
  const seconds = parseInt(parts.second, 10);

  // Calcula o dia da semana oficial no fuso de São Paulo
  const dayIndex = new Date(Date.UTC(year, month - 1, day, 12, 0, 0)).getUTCDay();

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  return {
    year,
    month,
    day,
    dayIndex,
    hours,
    minutes,
    seconds,
    formattedTime,
  };
}

/**
 * Converte string de horário "HH:MM" em minutos totais desde a meia-noite
 */
export function parseTimeToMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

/**
 * Retorna o horário de abertura e fechamento para o dia especificado, priorizando feriados
 */
export function getScheduleForDay(dayIndex: number, isHolidayDate: boolean): { open: string; close: string } {
  if (isHolidayDate) {
    return openingHours.holiday;
  }
  switch (dayIndex) {
    case 0:
      return openingHours.sunday;
    case 1:
      return openingHours.monday;
    case 2:
      return openingHours.tuesday;
    case 3:
      return openingHours.wednesday;
    case 4:
      return openingHours.thursday;
    case 5:
      return openingHours.friday;
    case 6:
      return openingHours.saturday;
    default:
      return openingHours.monday;
  }
}

/**
 * Calcula a informação de próxima abertura quando a loja está fechada
 */
function getNextOpeningInfo(
  currentYear: number,
  currentMonth: number,
  currentDay: number
): { relativeText: string; openTime: string } {
  // A loja abre todos os dias, portanto a próxima abertura após o fechamento de hoje é amanhã
  const tomorrow = new Date(Date.UTC(currentYear, currentMonth - 1, currentDay + 1, 12, 0, 0));
  const tYear = tomorrow.getUTCFullYear();
  const tMonth = tomorrow.getUTCMonth() + 1;
  const tDay = tomorrow.getUTCDate();
  const tDayIndex = tomorrow.getUTCDay();

  const holidayInfo = isHoliday(tYear, tMonth, tDay);
  const tomorrowSchedule = getScheduleForDay(tDayIndex, holidayInfo.isHoliday);

  if (holidayInfo.isHoliday) {
    return {
      relativeText: 'amanhã',
      openTime: tomorrowSchedule.open,
    };
  }

  if (tDayIndex === 1) {
    return {
      relativeText: 'segunda-feira',
      openTime: tomorrowSchedule.open,
    };
  }

  return {
    relativeText: 'amanhã',
    openTime: tomorrowSchedule.open,
  };
}

/**
 * Avalia o status em tempo real da loja de acordo com as regras de horário de São Paulo:
 * 1. ABERTO (Verde) -> dentro do horário e mais de 30 min antes do fechamento
 * 2. ABERTO — QUASE FECHANDO (Amarelo) -> faltando 30 min ou menos para fechar
 * 3. FECHADO (Vermelho) -> fora do horário de funcionamento
 */
export function getStoreStatus(customDate?: Date): StoreStatus {
  const spTime = getSaoPauloDateTime(customDate);
  const { year, month, day, dayIndex, hours, minutes, formattedTime } = spTime;
  const currentTotalMinutes = hours * 60 + minutes;

  // Verifica se hoje é feriado oficial em São Paulo (tem prioridade total sobre dia da semana)
  const todayHoliday = isHoliday(year, month, day);
  const todaySchedule = getScheduleForDay(dayIndex, todayHoliday.isHoliday);

  const openMinutes = parseTimeToMinutes(todaySchedule.open);
  const closeMinutes = parseTimeToMinutes(todaySchedule.close);

  // 1. ABERTO — VERDE: dentro do horário e faltam MAIS DE 30 MINUTOS para o fechamento
  if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes - 30) {
    return {
      status: 'open',
      isOpen: true,
      isHoliday: todayHoliday.isHoliday,
      holidayName: todayHoliday.name,
      openingTime: todaySchedule.open,
      closingTime: todaySchedule.close,
      statusText: 'ABERTO AGORA',
      subtext: `Fecha às ${todaySchedule.close}`,
      formattedCurrentTime: formattedTime,
      currentDayIndex: dayIndex,
    };
  }

  // 2. ABERTO, QUASE FECHANDO — AMARELO: EXATAMENTE 30 MINUTOS antes até o fechamento
  if (currentTotalMinutes >= closeMinutes - 30 && currentTotalMinutes < closeMinutes) {
    return {
      status: 'closing-soon',
      isOpen: true,
      isHoliday: todayHoliday.isHoliday,
      holidayName: todayHoliday.name,
      openingTime: todaySchedule.open,
      closingTime: todaySchedule.close,
      statusText: 'ABERTO — QUASE FECHANDO',
      subtext: `Fecha às ${todaySchedule.close}`,
      formattedCurrentTime: formattedTime,
      currentDayIndex: dayIndex,
    };
  }

  // 3. FECHADO — VERMELHO: fora do horário
  // Antes do horário de abertura de hoje:
  if (currentTotalMinutes < openMinutes) {
    return {
      status: 'closed',
      isOpen: false,
      isHoliday: todayHoliday.isHoliday,
      holidayName: todayHoliday.name,
      openingTime: todaySchedule.open,
      closingTime: todaySchedule.close,
      statusText: 'FECHADO AGORA',
      subtext: `Abre hoje às ${todaySchedule.open}`,
      formattedCurrentTime: formattedTime,
      currentDayIndex: dayIndex,
    };
  }

  // Após o fechamento de hoje:
  const nextOpening = getNextOpeningInfo(year, month, day);
  return {
    status: 'closed',
    isOpen: false,
    isHoliday: todayHoliday.isHoliday,
    holidayName: todayHoliday.name,
    openingTime: todaySchedule.open,
    closingTime: todaySchedule.close,
    statusText: 'FECHADO AGORA',
    subtext: `Abre ${nextOpening.relativeText} às ${nextOpening.openTime}`,
    formattedCurrentTime: formattedTime,
    currentDayIndex: dayIndex,
  };
}
