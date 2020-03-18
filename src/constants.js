export const MODAL_WINDOW = {
  CLOSE_ALL_MODALS: 'closeAllModals',
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
};

export const CITY_CODE = {
  ALL: 'ALL',
  MSK: 'MSK',
  VTB: 'VTB',
};

export const CINEMA_CODE = {
  ALL: 'ALL',
  GALILEO: 'GALILEO',
  VOKA: 'VOKA',
};

export const DATE_CODE = {
  ALL: 'ALL',
  TOMORROW: 'TOMORROW',
  DAY_AFTER_TOMORROW: 'DAYAFTERTOMORROW',
};

export const films = [
  {
    id: 1,
    src: '/assets/public/png/forrest-gamp.png',
    name: 'Форест Гамп',
    type: 'Драма',
    city: 'Минск',
    cityCode: CITY_CODE.MSK,
    date: 'завтра',
    dateCode: DATE_CODE.TOMORROW,
    description: `От лица главного героя Форреста Гампа, слабоумного безобидного человека с благородным и открытым сердцем,
    рассказывается история его необыкновенной жизни.
    Фантастическим образом превращается он в известного футболиста, героя войны,
    преуспевающего бизнесмена. Он становится миллиардером, но остается таким же бесхитростным,
    глупым и добрым. Форреста ждет постоянный успех во всем, а он любит девочку, с которой дружил
    в детстве, но взаимность приходит слишком поздно.`,
    cinema: CINEMA_CODE.GALILEO,
    time: '19:00',
    hour: 19,
    emptySeats: 10,
  },
  {
    id: 2,
    src: '/assets/public/png/harly-queen.png',
    name: 'Харли Квинн',
    type: 'Комедия',
    city: 'Минск',
    cityCode: CITY_CODE.MSK,
    date: 'завтра',
    dateCode: DATE_CODE.TOMORROW,
    description: `Харли Квинн — персонаж, суперзлодейка,
    позже антигерой вселенной DC Comics, первоначально появившаяся в мультсериале «Бэтмен» 1992 года,
    позже была перенесена в комиксы. Она является главной сподвижницей Джокера, по этой же причине ненавидит
    Бэтмена и его помощников`,
    cinema: CINEMA_CODE.VOKA,
    time: '12:00',
    hour: 12,
    emptySeats: 10,

  },
  {
    id: 3,
    src: '/assets/public/png/spion.jpg',
    name: 'Офицер и шпион',
    type: 'Драма',
    city: 'Минск',
    cityCode: CITY_CODE.MSK,
    date: 'послезавтра',
    dateCode: DATE_CODE.DAY_AFTER_TOMORROW,
    description: `Сотрудник французской спецслужбы капитан Дрейфус объявлен особо опасным преступником.
    Официальное обвинение — государственная измена и шпионаж в пользу Германии. Бывший наставник Дрейфуса
    Жорж Пикар ведет собственное расследование:
    ему необходимо найти таинственную «секретную папку», чтобы доказать невиновность своего подзащитного.
    Но охотится за ней не только он.`,
    cinema: CINEMA_CODE.GALILEO,
    time: '17:00',
    hour: 17,
    emptySeats: 2,

  },
  {
    id: 4,
    src: '/assets/public/png/parasites.png',
    name: 'Паразиты',
    type: 'Драма',
    city: 'Витебск',
    cityCode: CITY_CODE.VTB,
    date: 'завтра',
    dateCode: DATE_CODE.TOMORROW,
    description: `Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале,
    воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на
    стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак.
    Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома
    хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.`,
    cinema: CINEMA_CODE.VOKA,
    time: '15:00',
    hour: 15,
    emptySeats: 1,
  },
];

export const cinemas = {
  [CINEMA_CODE.GALILEO]: {
    id: 1,
    name: 'Galileo',
    cinemaName: 'Silver Screen cinemas в ТРЦ "Galileo',
    address: 'г.Минск, ул. Бобруйская, 6',
    cinemaCode: CINEMA_CODE.GALILEO,
  },
  [CINEMA_CODE.VOKA]: {
    id: 2,
    name: 'VOKA CINEMA',
    cinemaName: 'VOKA CINEMA by SilverScreen в ТРЦ Dana Mall',
    address: 'г.Минск, ул. Петра Мстиславца, 11',
    cinemaCode: CINEMA_CODE.VOKA,
  },
};

export const filters = [
  {
    id: 1,
    filterName: 'cityCode',
    defaultValue: 'Город',
    items: [
      { id: 1, name: 'Все города', code: CITY_CODE.ALL },
      { id: 2, name: 'Минск', code: CITY_CODE.MSK },
      { id: 3, name: 'Витебск', code: CITY_CODE.VTB },
    ],
  },
  {
    id: 2,
    filterName: 'cinema',
    defaultValue: 'Все кинотеатры',
    items: [
      { id: 1, name: 'Все кинотеатры', code: CINEMA_CODE.ALL },
      { id: 2, name: 'Galileo', code: CINEMA_CODE.GALILEO },
      { id: 3, name: 'VOKA CINEMA', code: CINEMA_CODE.VOKA },
    ],
  },
  {
    id: 3,
    filterName: 'dateCode',
    defaultValue: 'Всегда',
    items: [
      { id: 1, name: 'всегда', code: DATE_CODE.ALL },
      { id: 2, name: 'послезавтра', code: DATE_CODE.DAY_AFTER_TOMORROW },
      { id: 3, name: 'завтра', code: DATE_CODE.TOMORROW },
    ],
  },
  {
    id: 4,
    filterName: 'time',
    defaultValue: 'Все сеансы',
    items: [
      {
        id: 1,
        from: 0,
        to: 24,
        name: 'Все время',
      },
      {
        id: 2,
        from: 7,
        to: 16,
        name: '07:00 - 16:00',
      }, {
        id: 3,
        from: 16,
        to: 22,
        name: '16:00 - 22:00',
      }],
  },
  {
    id: 5,
    filterName: 'availableSeats',
    defaultValue: 'Свободные места',
    items: [
      { id: 1, name: '>=1', number: 1 },
      { id: 2, name: '>4', number: 4 },
    ],
  },
];
