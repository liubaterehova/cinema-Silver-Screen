export const MODAL_WINDOW = {
  CLOSE_ALL_MODALS: 'closeAllModals',
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
  ADD_CINEMA: 'addCinema',
  ADD_FILM: 'addFilm',
  ADD_SESSION: 'addSession',
  ADD_SERVICES: 'addServices',
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
export const FILMS = [
  {
    id: 1,
    src: '/assets/public/png/forrest-gamp.png',
    name: 'Forrest Gump',
    type: 'Drama',
    city: 'Minsk',
    cityCode: CITY_CODE.MSK,
    date: 'tomorrow',
    dateCode: DATE_CODE.TOMORROW,
    description: `Forrest Gump is a 1994 American magical realism drama film directed by Robert Zemeckis and written 
    by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom, and stars Tom Hanks, Robin Wright, Gary Sinise, 
    Mykelti Williamson, and Sally Field. The story depicts several decades in the life of Forrest Gump (Hanks), a slow-witted but 
    kind-hearted man from Alabama who witnesses and unwittingly influences several defining historical events in the 20th century 
    United States. The film differs substantially from the novel.
    Principal photography took place in late 1993, mainly in Georgia, North Carolina, and South Carolina. Extensive visual effects
     were used to incorporate Hanks into archived footage and to develop other scenes. The soundtrack features songs reflecting
      the different periods seen in the film.`,
    cinema: CINEMA_CODE.GALILEO,
    time: '19:00',
    hour: 19,
    emptySeats: 10,
  },
  {
    id: 2,
    src: '/assets/public/png/harly-queen.png',
    name: 'Harley Quinn',
    type: 'Comedy',
    city: 'Minsk',
    cityCode: CITY_CODE.MSK,
    date: 'tomorrow',
    dateCode: DATE_CODE.TOMORROW,
    description: `The multiverse would be a much less lively place without the hijinks and shenanigans of the former Dr. Harleen 
    Quinzel, the one and only Clown Princess of Crime.
    Sometimes love can make people do crazy things. Other times? It drives them completely insane. Such is the case with 
    Harley Quinn, formerly Dr. Harleen Quinzel. A promising psychologist and intern at Arkham Asylum in Gotham City, Harleen 
    was given the chance to get up close and personal with the Joker, an experience that wound up ending…badly. Harleen became 
    obsessed with her subject, and after falling madly in love with the Clown Prince of Crime, she helped him escape the asylum.`,
    cinema: CINEMA_CODE.VOKA,
    time: '12:00',
    hour: 12,
    emptySeats: 10,

  }, {
    id: 3,
    src: '/assets/public/png/spion.jpg',
    name: 'Officer and Spy',
    type: 'Drama',
    city: 'Minsk',
    cityCode: CITY_CODE.MSK,
    date: 'day after tomorrow',
    dateCode: DATE_CODE.DAY_AFTER_TOMORROW,
    description: `An Officer and a Spy (French: J'accuse) is a 2019 French-Italian historical drama film directed 
    by Roman Polanski about the Dreyfus affair, with a screenplay by Polanski and Robert Harris based on Harris's 
    2013 novel of the same name.
    It had its premiere at the 76th Venice International Film Festival on 30 August 2019, winning the Grand Jury 
    Prize. It received 12 nominations for the 45th César Awards, the most nominations of any eligible film, and 
    eventually won the awards for Best Adaptation, Best Costume Design, and Best Director.
    An Officer and a Spy is Polanski's first film to be shot after he was expelled from the AMPAS under the new 
    "ethical standards" of the post-Me Too era. The director's perceived impunity in Europe in that regard made 
    the release of the film and the accolades it won in Italy and France controversial.`,
    cinema: CINEMA_CODE.GALILEO,
    time: '17:00',
    hour: 17,
    emptySeats: 2,

  },
  {
    id: 4,
    src: '/assets/public/png/parasites.png',
    name: 'Parasites',
    type: 'Drama',
    city: 'Vitebsk',
    cityCode: CITY_CODE.VTB,
    date: 'tomorrow',
    dateCode: DATE_CODE.TOMORROW,
    description: `Parasite (Korean: 기생충; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed by 
    Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, 
    Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun and follows the members of a poor family who scheme to 
    become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.
    Parasite premiered at the 2019 Cannes Film Festival on 21 May 2019, where it became the first South Korean film to 
    win the Palme d'Or and the first film to win with a unanimous vote since Blue Is the Warmest Colour at the 2013 Festival. 
    It was then released in South Korea by CJ Entertainment on 30 May 2019.cinema: CINEMA_CODE.VOKA,`,
    time: '15:00',
    hour: 15,
    emptySeats: 1,
  },
];

export const CINEMAS = {
  [CINEMA_CODE.GALILEO]: {
    id: 1,
    filterName: 'Galileo',
    cinemaName: 'Silver Screen cinemas in "Galileo',
    address: 'city Minsk, str. Bobryiskay, 6',
    cinemaCode: CINEMA_CODE.GALILEO,
  },
  [CINEMA_CODE.VOKA]: {
    id: 2,
    filterName: 'VOKA CINEMA',
    cinemaName: 'VOKA CINEMA by SilverScreen in Dana Mall',
    address: 'сity Vitebsk, str. Mstislavca, 11',
    cinemaCode: CINEMA_CODE.VOKA,
  },
};

export const films = [
  {
    id: 1,
    src: '/assets/public/png/forrest-gamp.png',
    name: 'Форест Гамп',
    type: 'Драма',
    description: `От лица главного героя Форреста Гампа, слабоумного безобидного человека с благородным и открытым сердцем,
    рассказывается история его необыкновенной жизни.
    Фантастическим образом превращается он в известного футболиста, героя войны,
    преуспевающего бизнесмена. Он становится миллиардером, но остается таким же бесхитростным,
    глупым и добрым. Форреста ждет постоянный успех во всем, а он любит девочку, с которой дружил
    в детстве, но взаимность приходит слишком поздно.`,
    cinemaId: 1,
    time: '14:00',
  },
  {
    id: 2,
    src: '/assets/public/png/harly-queen.png',
    name: 'Харли Квинн',
    type: 'Комедия',
    description: `Харли Квинн — персонаж, суперзлодейка,
    позже антигерой вселенной DC Comics, первоначально появившаяся в мультсериале «Бэтмен» 1992 года,
    позже была перенесена в комиксы. Она является главной сподвижницей Джокера, по этой же причине ненавидит
    Бэтмена и его помощников`,
    cinemaId: 2,
    time: '12:00',

  },
  {
    id: 3,
    src: '/assets/public/png/spion.jpg',
    name: 'Офицер и шпион',
    type: 'Драма',
    description: `Сотрудник французской спецслужбы капитан Дрейфус объявлен особо опасным преступником.
    Официальное обвинение — государственная измена и шпионаж в пользу Германии. Бывший наставник Дрейфуса
    Жорж Пикар ведет собственное расследование:
    ему необходимо найти таинственную «секретную папку», чтобы доказать невиновность своего подзащитного.
    Но охотится за ней не только он.`,
    cinemaId: 1,
    time: '15:00',

  },
  {
    id: 4,
    src: '/assets/public/png/parasites.png',
    name: 'Паразиты',
    type: 'Драма',
    description: `Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале,
    воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на
    стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак.
    Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома
    хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.`,
    cinemaId: 2,
    time: '15:00',
  },
];

export const filters = [
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

export const cinemas = {
  1: {
    id: 1,
    cinemaName: 'Silver Screen cinemas в ТРЦ "Galileo',
    address: 'г.Минск, ул. Бобруйская, 6',
  },
  2: {
    id: 2,
    cinemaName: 'VOKA CINEMA by SilverScreen в ТРЦ Dana Mall',
    address: 'г.Минск, ул. Петра Мстиславца, 11',
  },
};

