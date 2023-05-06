import {
  CREDIT_ROUTES,
  CATALOG_ROUTES,
  CAR_SELECTION_ROUTES,
  TEST_DRIVE_ROUTES,
  CAR_INSURANCE_ROUTES,
  TRADE_ROUTES,
  NEWS_PAGE_ROUTES,
  JOB_VACANCIES_ROUTES,
  CONTACT_PAGE_ROUTES,
} from "../../settings/routes";

export const buyCar = {
  title: "Купить авто",
  items: [
    {
      title: "Каталог авто",
      link: CATALOG_ROUTES.CATALOG.path,
    },
    {
      title: "Рассчитать кредит",
      link: CREDIT_ROUTES.CREDIT.path,
    },
    {
      title: "Подбор автомобиля",
      link: CAR_SELECTION_ROUTES.CAR_SELECTION.path,
    },
    {
      title: "Записаться на Test Drive",
      link: TEST_DRIVE_ROUTES.TEST_DRIVE.path,
    },
  ],
};
export const sellCar = {
  title: "Продать авто",
  items: [
    { title: "Оценить авто", link: TRADE_ROUTES.TRADE.path },
    { title: "Trade in / Обмен", link: TRADE_ROUTES.TRADE.path },
    {
      title: "Комиссионая продажа",
      link: TRADE_ROUTES.TRADE.path,
    },
  ],
};
export const services = {
  title: "Услуги",
  items: [
    {
      title: "Автокредитование",
      link: CAR_INSURANCE_ROUTES.CAR_INSURANCE.path,
    },
    {
      title: "Автострахование",
      link: CAR_INSURANCE_ROUTES.CAR_INSURANCE.path,
    },
  ],
};
export const about = {
  title: "О компании",
  items: [
    { title: "Новости", link: NEWS_PAGE_ROUTES.NEWS.path },
    { title: "Вакансии", link: JOB_VACANCIES_ROUTES.JOB_VACANCIES.path },
    { title: "Контакты", link: CONTACT_PAGE_ROUTES.CONTACT.path },
  ],
};
export const socialMedia = [
  { link: process.env.REACT_APP_VK, icon: "vk" },
  { link: process.env.REACT_APP_INST, icon: "inst" },
  { link: process.env.REACT_APP_OK, icon: "ok" },
  { link: process.env.REACT_APP_FACEBOOK, icon: "facebook" },
  { link: process.env.REACT_APP_TWITTER, icon: "twitter" },
];
