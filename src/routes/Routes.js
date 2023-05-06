import React from "react";
import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Main } from "../pages/user/Main/Main";
import { Favorites } from "../pages/user/Favorites/Favorites";
import { Comparison } from "../pages/user/Comparison/Comparison";
import { TradeIn } from "../pages/user/TradeIn/TradeIn";
import { CreditPage } from "../pages/user/CreditPage/CreditPage";
import { CarSelectionPage } from "../pages/user/CarSelectionPage/CarSelectionPage";
import { TestDrive } from "../pages/user/TestDrive/TestDrive";
import { CarInsurance } from "../pages/user/CarInsurance/CarInsurance";
import { ContactPage } from "../pages/user/ContactPage/ContactPage";
import { SecurityPolicy } from "../pages/user/SecurityPolicy/SecurityPolicy";
import { TestThisCar } from "../pages/user/TestThisCar/TestThisCar";

import {
  MAIN_ROUTES,
  FAVORITES_ROUTES,
  COMPARISON_ROUTES,
  TRADE_ROUTES,
  CREDIT_ROUTES,
  CAR_SELECTION_ROUTES,
  TEST_DRIVE_ROUTES,
  CAR_INSURANCE_ROUTES,
  CONTACT_PAGE_ROUTES,
  SECURITY_POLICY_ROUTES,
} from "../settings/routes";

import { catalogRoutes, jobsRoutes, newsRoutes } from "./catalogRoutes";
import { useDispositionsAdminRoutes } from "./useDispositionsAdminRoutes";

export const Routes = () => {
  const { authRoutes } = useDispositionsAdminRoutes();

  let element = useRoutes([
    { path: MAIN_ROUTES.MAIN.path, element: <Main /> },
    { path: CONTACT_PAGE_ROUTES.CONTACT.path, element: <ContactPage /> },
    { path: FAVORITES_ROUTES.FAVORITES.path, element: <Favorites /> },
    { path: COMPARISON_ROUTES.COMPARISON.path, element: <Comparison /> },
    { path: TRADE_ROUTES.TRADE.path, element: <TradeIn /> },
    ...catalogRoutes,
    { path: CREDIT_ROUTES.CREDIT.path, element: <CreditPage /> },
    {
      path: SECURITY_POLICY_ROUTES.SECURITY_POLICY.path,
      element: <SecurityPolicy />,
    },
    {
      path: CAR_SELECTION_ROUTES.CAR_SELECTION.path,
      element: <CarSelectionPage />,
    },
    { path: TEST_DRIVE_ROUTES.TEST_DRIVE.path, element: <TestDrive /> },
    { path: TEST_DRIVE_ROUTES.TEST_DRIVE_CAR.path, element: <TestThisCar /> },
    {
      path: CAR_INSURANCE_ROUTES.CAR_INSURANCE.path,
      element: <CarInsurance />,
    },
    ...newsRoutes,
    ...jobsRoutes,
    ...authRoutes,
    {
      path: "*",
      element: <Navigate to={MAIN_ROUTES.MAIN.path} />,
    },
  ]);

  return element;
};
