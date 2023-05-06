import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export function useIsAdmin() {
  const location = useLocation();
  const [isAdmin, onAdmin] = useState(null);
  useEffect(() => {
    let names = location.pathname.split("/");
    if (names[1] === "admin" || names[1] === "login") {
      onAdmin(true);
    } else {
      onAdmin(false);
    }
  }, [location]);

  return isAdmin;
}
