import React from "react";
import { Layout } from "./components/Layout/Layout";
import { Routes } from "./routes/Routes";
import { getCarsInfoAction } from "./store/cars/carsActions";
import { useStateWatcher } from "./hooks/useStateWatcher";
import { useReturnQuery } from "./hooks/useReturnQuery";
import { setBrandList, setContact } from "./store/cars/carsReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useReturnQuery("car-list", getCarsInfoAction);
  useReturnQuery("brand-list", setBrandList);
  useReturnQuery("contact", setContact);
  useStateWatcher();
  return (
    <Layout>
      <Routes />
      <ToastContainer />
    </Layout>
  );
}

export default App;
