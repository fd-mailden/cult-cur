import React from "react";
import PropTypes from "prop-types";
import { AdminLayout } from "./AdminLayout";
import { useIsAdmin } from "./useIsAdmin";
import { MainLayout } from "./MainLayout";
function Layout({ children }) {
  const isAdmit = useIsAdmin();

  if (isAdmit) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  return <MainLayout>{children}</MainLayout>;
}
Layout.propTypes = {
  children: PropTypes.any,
};
export { Layout };
