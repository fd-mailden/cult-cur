import {
  CATALOG_ROUTES,
  FAVORITES_ROUTES,
  COMPARISON_ROUTES,
  TRADE_ROUTES,
  CREDIT_ROUTES,
  CAR_SELECTION_ROUTES,
  TEST_DRIVE_ROUTES,
  CAR_INSURANCE_ROUTES,
  NEWS_PAGE_ROUTES,
  JOB_VACANCIES_ROUTES,
  CONTACT_PAGE_ROUTES,
} from "./routes";

export const breadcrumb_list = [
  {
    path: CATALOG_ROUTES.CATALOG.path,
    breadcrumb: "Catalog",
    num: 0,
    field: "objectId",
  },
  {
    path: CATALOG_ROUTES.BRAND_PAGE.path,
    breadcrumb: CATALOG_ROUTES.BRAND_PAGE.path,
    num: 1,
    field: "objectId",
  },
  {
    path: CATALOG_ROUTES.CAR_PAGE.path,
    breadcrumb: CATALOG_ROUTES.CAR_PAGE.path,
    num: 2,
    collection: "car-list",
    isFind: true,
    field: "objectId",
  },
  {
    path: FAVORITES_ROUTES.FAVORITES.path,
    breadcrumb: "Favorites",
    num: 0,
  },
  {
    path: COMPARISON_ROUTES.COMPARISON.path,
    breadcrumb: "Comparison",
    num: 0,
  },
  {
    path: TRADE_ROUTES.TRADE.path,
    breadcrumb: "Trade-in",
    num: 0,
  },
  {
    path: CREDIT_ROUTES.CREDIT.path,
    breadcrumb: "Credit",
    num: 0,
  },
  {
    path: CAR_SELECTION_ROUTES.CAR_SELECTION.path,
    breadcrumb: "Car-selection",
    num: 0,
  },
  {
    path: TEST_DRIVE_ROUTES.TEST_DRIVE.path,
    breadcrumb: "Test-drive",
    num: 0,
  },
  {
    path: CAR_INSURANCE_ROUTES.CAR_INSURANCE.path,
    breadcrumb: "Insurance",
    num: 0,
  },
  {
    path: NEWS_PAGE_ROUTES.NEWS.path,
    breadcrumb: "News",
    num: 0,
  },
  {
    path: NEWS_PAGE_ROUTES.SEPARATE_NEWS.path,
    breadcrumb: NEWS_PAGE_ROUTES.SEPARATE_NEWS.path,
    num: 1,
    collection: "news",
    isFind: true,
    field: "id",
  },
  {
    path: JOB_VACANCIES_ROUTES.JOB_VACANCIES.path,
    breadcrumb: "Jobs",
    num: 0,
  },
  {
    path: JOB_VACANCIES_ROUTES.JOB_VACANCY.path,
    breadcrumb: NEWS_PAGE_ROUTES.SEPARATE_NEWS.path,
    num: 1,
    collection: "vacancies",
    isFind: true,
    field: "id",
  },
  {
    path: CONTACT_PAGE_ROUTES.CONTACT.path,
    breadcrumb: "Contact",
    num: 0,
  },
];
