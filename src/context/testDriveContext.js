import React,{useContext} from "react";
/**
 * @param   {func} setAutoSalon  function who choosing marker
 * @param   {boolean} autoSalon   auto Salon param
 * @param   {boolean} mapMarker   marker param
 */
export const TestDriveContext = React.createContext();
export const useTestDriveContext = () => useContext(TestDriveContext)
