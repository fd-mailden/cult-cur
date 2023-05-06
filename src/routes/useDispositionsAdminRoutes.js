import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/auth/authSelectors";
import { Navigate } from "react-router-dom";
import { Login } from "../pages/admin/Login/Login";
import { MainAdmin } from "../pages/admin/MainAdmin/MainAdmin";
import { TradeInDecl } from "../pages/admin/TradeInDecl/TradeInDecl";
import { TestDriveDecl } from "../pages/admin/TestDriveDecl/TestDriveDecl";
import { InsuranceDecl } from "../pages/admin/InsuranceDecl/InsuranceDecl";
import { CreditDecl } from "../pages/admin/CreditDecl/CreditDecl";
import { CallMe } from "../pages/admin/CallMe/CallMe";

import { ADMIN_ROUTES } from "../settings/routes";

export function useDispositionsAdminRoutes() {
  const isAuth = useSelector(selectAuth);
  const authRoutes = [
    {
      path: ADMIN_ROUTES.ADMIN.path,
      element: isAuth ? (
        <Navigate to={ADMIN_ROUTES.ADMIN_HOME.path} />
      ) : (
        <Navigate to={ADMIN_ROUTES.LOGIN.path} />
      ),
    },
    {
      path: ADMIN_ROUTES.LOGIN.path,
      element: !isAuth ? <Login /> : <Navigate to={ADMIN_ROUTES.ADMIN.path} />,
    },
    {
      path: ADMIN_ROUTES.ADMIN_HOME.path,
      element: isAuth ? (
        <MainAdmin />
      ) : (
        <Navigate to={ADMIN_ROUTES.ADMIN.path} />
      ),
    },
    {
      path: ADMIN_ROUTES.TRADE_IN.path,
      element: isAuth ? (
        <TradeInDecl />
      ) : (
        <Navigate to={ADMIN_ROUTES.LOGIN.path} />
      ),
    },
    {
      path: ADMIN_ROUTES.INSURANCE.path,
      element: isAuth ? (
        <InsuranceDecl />
      ) : (
        <Navigate to={ADMIN_ROUTES.LOGIN.path} />
      ),
    },
    {
      path: ADMIN_ROUTES.CALLS.path,
      element: isAuth ? (
        <CallMe />
      ) : (
        <Navigate to={ADMIN_ROUTES.LOGIN.path} />
      ),
    },
    {
      path: ADMIN_ROUTES.CREDIT.path,
      element: isAuth ? (
        <CreditDecl />
      ) : (
        <Navigate to={ADMIN_ROUTES.LOGIN.path} />
      ),
    },
    
    {
      path: ADMIN_ROUTES.TEST_DRIVE.path,
      element: isAuth ? (
        <TestDriveDecl />
      ) : (
        <Navigate to={ADMIN_ROUTES.LOGIN.path} />
      ),
    },
    {
      path: "admin/*",
      element: <Navigate to={ADMIN_ROUTES.LOGIN.path} />,
    },
  ];

  return { authRoutes };
}
