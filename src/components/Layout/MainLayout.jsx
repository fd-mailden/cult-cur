import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import PropTypes from "prop-types";
import { useObserver } from "../../hooks/useObserver";

function MainLayout({ children }) {
  const { indicatorRef, isView } = useObserver();
  return (
    <div className="app">
      <Header inView={isView} />
      <div ref={indicatorRef}></div>
      {children}
      <Footer />
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.any,
};
export { MainLayout };
