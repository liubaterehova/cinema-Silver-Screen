const MODAL_WINDOW = {
  CLOSE_ALL_MODALS: 'closeAllModals',
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
};

const films = [
  {
    id: 0,
    src: '/assets/public/png/forrest-gamp.png',
    name: 'Форест Гамп',
    type: 'Драма',
  },
  {
    id: 1,
    src: '/assets/public/png/harly-queen.png',
    name: 'Харли Квинн',
    type: 'Комедия',
  },
  {
    id: 2,
    src: '/assets/public/png/spion.jpg',
    name: 'Офиц и шпион',
    type: 'Драма',
  },
  {
    id: 3,
    src: '/assets/public/png/parasites.png',
    name: 'Паразиты',
    type: 'Драма',
  },
];

const filters = [
  {
    id: 1,
    filter: 'Город',
  },
  {
    id: 2,
    filter: 'Все кинотеатры',
  },
  {
    id: 3,
    filter: 'Сегодня',
  },
  {
    id: 4,
    filter: 'Все сеансы',
  },
  {
    id: 5,
    filter: 'Свободные места',
  },
];

export { MODAL_WINDOW, films, filters };
