import React,{useContext} from "react";
/**
 * @param   {func} setBurgerActive  off/on  Burger function
 * @param   {boolean} isBurgerActive   off/on Burger menu param
 * @param   {boolean} isOpenMenu   off/on filter Menu menu param
 * @param   {func} setOpenMenu   off/on filter Menu function
 * @param   {any} breadcrumbs   breadcrumbs
 */
export const HeaderContext = React.createContext();
export const useHeaderContext = () => useContext(HeaderContext)
