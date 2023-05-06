import React from "react";
import PropTypes from "prop-types";
import { AdminHeader } from "../admin/Header/AdminHeader";
function AdminLayout({ children }) {
  return (
    <div className="app">
      <AdminHeader />
      {children}
    </div>
  );
}
AdminLayout.propTypes = {
  children: PropTypes.node,
};
export { AdminLayout };
