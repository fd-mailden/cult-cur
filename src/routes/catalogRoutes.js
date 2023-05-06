import {
  CATALOG_ROUTES,
  NEWS_PAGE_ROUTES,
  JOB_VACANCIES_ROUTES,

} from "../settings/routes";

import { NewsPage } from "../pages/user/NewsPage/NewsPage";
import { SeparateNewsPages } from "../pages/user/SeparateNewsPages/SeparateNewsPages";
import { JobsPage } from "../pages/user/JobsPage/JobsPage";
import { JobPage } from "../pages/user/JobPage/JobPage";
import { CarPage } from "../pages/user/CarPage/CarPage";
import { Сatalog } from "../pages/user/Сatalog/Сatalog";
import { BrandPage } from "../pages/user/BrandPage/BrandPage";

export const catalogRoutes = [
  {
    path: CATALOG_ROUTES.CATALOG.path,
    element: <Сatalog />,
  },
  { path: CATALOG_ROUTES.BRAND_PAGE.path, element: <BrandPage /> },
  { path: CATALOG_ROUTES.CAR_PAGE.path, element: <CarPage /> },
];

export const jobsRoutes = [
  { path: JOB_VACANCIES_ROUTES.JOB_VACANCIES.path, element: <JobsPage /> },
  { path: JOB_VACANCIES_ROUTES.JOB_VACANCY.path, element: <JobPage /> },
];

export const newsRoutes = [
  { path: NEWS_PAGE_ROUTES.NEWS.path, element: <NewsPage /> },
  {
    path: NEWS_PAGE_ROUTES.SEPARATE_NEWS.path,
    element: <SeparateNewsPages />,
  },
];
