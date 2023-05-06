import React from "react";
import { AdminNavigation } from "./AdminNavigation/AdminNavigation";
import style from "./AdminHeader.module.scss";
import {useAdminHeader} from './useAdminHeader'
import adminImg from '../../../assets/images/admin/admin.png'

function AdminHeader() {
  const {isAdmin} = useAdminHeader()
  if(!isAdmin){
    return null
  }
  return (
    <header className={style.header}>
      <div className={style.admin}>
        <img src={adminImg} className = {style.admin__image} alt="admin image" />
        <p className={style.admin__name}>Admin</p>
      </div>
      <AdminNavigation />
    </header>
  );
}

export { AdminHeader };
