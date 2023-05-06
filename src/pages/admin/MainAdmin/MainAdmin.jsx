import React from "react";
import style from "./MainAdmin.module.scss";
import { navList } from "../../../settings/adminNav";
import { useNavigate } from "react-router-dom";
import {AdminWrapper} from '../../../components/UI/AdminWrapper/AdminWrapper'
function MainAdmin() {
  const navigate = useNavigate();
  return (
   <AdminWrapper>
          {navList.map((item, index) => (
            <div
              key={index}
              className={style.item}
              onClick={() => navigate(item.path)}
            >
              <h4 className={style.item__text}>{item.name}</h4>
            </div>
          ))}
    </AdminWrapper>
  );
}

export { MainAdmin };
