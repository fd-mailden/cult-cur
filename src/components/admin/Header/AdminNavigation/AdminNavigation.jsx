import React from "react";
import style from "./AdminNavigation.module.scss";
import { NavLink } from "react-router-dom";
import { onClear } from "../../../../store/auth/authReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navList } from "../../../../settings/adminNav";
import classNames from "classnames";
import { Icon } from "../../../UI/Icon/Icon";
import { signOut } from "firebase/auth";
import { auth } from "../../../../lib/init-firebase";

function AdminNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singOut = () => {
    dispatch(onClear());
    signOut(auth);
  };

  return (
    <section className={style["nav-wrapper"]}>
      <nav className={style.nav}>
        {navList.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              classNames(style.link, isActive && style["link--active"])
            }
          >
            <Icon name={link.icon} className={style.link__icon} />
            <p className={style.link__text}> {link.name}</p>
          </NavLink>
        ))}
      </nav>
      <div className={style.buttons}>
        <button className={style.button} onClick={singOut}>
          <Icon name="out" className={style.link__icon} />
          <p className={style.button__text}> logOut</p>
        </button>
        <button className={style.button} onClick={() => navigate("/")}>
          <Icon name="home" className={style.link__icon} />
          <p className={style.button__text}>Market</p>
        </button>
      </div>
    </section>
  );
}

export { AdminNavigation };
