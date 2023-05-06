import React,{useContext} from "react";
/**
 * @param   {object} contact  all contacts
 * @param   {object} contactItem   active contact
 * @param   {func} onActiveMarker   functions who find contact
 */
 export const ContactContext = React.createContext();
 export const useContactContext = () => useContext(ContactContext)