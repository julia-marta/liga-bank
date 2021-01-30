export const MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Конвертер валют`, `Контакты`, `Задать вопрос`];

export const ACTIVE_ITEM = `Конвертер валют`;

export const CURRENCIES = [`RUB`, `USD`, `EUR`, `GBR`, `CNY`];

export const CONVERTER_FIELDS = [{
    type: `have`,
    label: `У меня есть`,
    currency: `RUB`,
  },
  {
    type: `want`,
    label: `Хочу приобрести`,
    currency: `USD`,
}];

export const CONTACTS = [{
  type: `mobile-phone`,
  iconWidth: 10,
  iconHeight: 16,
  number: `*0904`,
  description: `Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2`,
},
{
  type: `phone`,
  iconWidth: 16,
  iconHeight: 16,
  number: `8 800 111 22 33`,
  description: `Бесплатный для всех городов России`,
}];

export const SOCIAL_LINKS = [{
  type: `facebook`,
  label: `Фейсбук`,
  iconWidth: 9,
  iconHeight: 16,
},
{
  type: `instagram`,
  label: `Инстаграм`,
  iconWidth: 16,
  iconHeight: 16,
},
{
  type: `twitter`,
  label: `Твиттер`,
  iconWidth: 16,
  iconHeight: 13,
},
{
  type: `youtube`,
  label: `Ютуб`,
  iconWidth: 16,
  iconHeight: 13,
}];
