export const MAX_RANGE = 7;
export const MAX_LOGS = 10;
export const CURRENCIES = [`RUB`, `USD`, `EUR`, `GBP`, `CNY`];
export const MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Конвертер валют`, `Контакты`, `Задать вопрос`];
export const ACTIVE_ITEM = `Конвертер валют`;

export const CONVERTER_FIELDS = [{
    type: `have`,
    label: `У меня есть`,
  },
  {
    type: `want`,
    label: `Хочу приобрести`,
}];

export const CONTACTS = [{
  type: `mobile`,
  number: `*0904`,
  description: `Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2`,
},
{
  type: `phone`,
  number: `8 800 111 22 33`,
  description: `Бесплатный для всех городов России`,
}];

export const SOCIAL_LINKS = [{
  type: `facebook`,
  label: `Фейсбук`,
},
{
  type: `instagram`,
  label: `Инстаграм`,
},
{
  type: `twitter`,
  label: `Твиттер`,
},
{
  type: `youtube`,
  label: `Ютуб`,
}];

export const DefaultField = {
  CURRENT_INPUT: `have`,
  BASE_CURRENCY: `RUB`,
  OTHER_CURRENCY: `USD`,
}

export const IconType = {
  ARROW: {
    name: `arrow`,
    width: 41,
    height: 18,
  },
  ARROWS: {
    name: `arrows`,
    width: 56,
    height: 36,
  },
  CALENDAR: {
    name: `calendar`,
    width: 41,
    height: 44,
  },
  FACEBOOK: {
    name: `facebook`,
    width: 9,
    height: 16,
  },
  INSTAGRAM: {
    name: `instagram`,
    width: 16,
    height: 16,
  },
  LOGIN: {
    name: `login`,
    width: 20,
    height: 22,
  },
  MOBILE: {
    name: `mobile-phone`,
    width: 10,
    height: 16,
  },
  PHONE: {
    name: `phone`,
    width: 16,
    height: 16,
  },
  SELECT: {
    name: `select`,
    width: 18,
    height: 11,
  },
  TWITTER: {
    name: `twitter`,
    width: 16,
    height: 13,
  },
  YOUTUBE: {
    name: `youtube`,
    width: 16,
    height: 13,
  }
};
