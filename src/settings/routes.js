import { generatePath } from "react-router";
export const MAIN_ROUTES = {
  MAIN: { path: "/" },
};
export const FAVORITES_ROUTES = {
  FAVORITES: { path: "/favorites" },
};
export const COMPARISON_ROUTES = {
  COMPARISON: { path: "/comparison" },
};
export const TRADE_ROUTES = {
  TRADE: { path: "/trade-in" },
};

export const CATALOG_ROUTES = {
  CATALOG: { path: "/catalog" },
  BRAND_PAGE: {
    path: "/catalog/:brand",
    generate: (brand) => generatePath("/catalog/:brand", { brand: brand }),
  },
  CAR_PAGE: {
    path: "/catalog/:brand/:idCar",
    generate: (brand, idCar) =>
      generatePath("/catalog/:brand/:idCar", { brand: brand, idCar: idCar }),
  },
};
export const CREDIT_ROUTES = {
  CREDIT: { path: "/credit" },
};

export const CAR_SELECTION_ROUTES = {
  CAR_SELECTION: { path: "/car-selection" },
};
export const TEST_DRIVE_ROUTES = {
  TEST_DRIVE: { path: "/test-drive" },
  TEST_DRIVE_CAR: {
    path: "/test-drive/:idCar",
    generate: (idCar) => generatePath("/test-drive/:idCar", { idCar: idCar }),
  },
};
export const CAR_INSURANCE_ROUTES = {
  CAR_INSURANCE: { path: "/car-insurance" },
};
export const NEWS_PAGE_ROUTES = {
  NEWS: { path: "/news" },
  SEPARATE_NEWS: {
    path: "/news/:id",
    generate: (id) => generatePath("/news/:id", { id: id }),
  },
};
export const JOB_VACANCIES_ROUTES = {
  JOB_VACANCIES: { path: "/jobs" },
  JOB_VACANCY: {
    path: "/jobs/:id",
    generate: (id) => generatePath("/jobs/:id", { id: id }),
  },
};
export const CONTACT_PAGE_ROUTES = {
  CONTACT: { path: "/contact" },
};
export const SECURITY_POLICY_ROUTES = {
  SECURITY_POLICY: { path: "/security-policy" },
};

/////  auth

export const ADMIN_ROUTES = {
  ADMIN: { path: "/admin" },
  ADMIN_HOME: { path: "/admin/home" },
  LOGIN: { path: "/admin/login" },
  TRADE_IN: { path: "/admin/trade-in" },
  TEST_DRIVE: { path: "/admin/test-drive" },
  INSURANCE: { path: "/admin/insurance" },
  CREDIT: { path: "/admin/credit" },
  CALLS: { path: "/admin/calls" },
};
