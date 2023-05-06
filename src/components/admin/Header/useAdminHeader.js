import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useAdminHeader() {
  const location = useLocation();
  const [isAdmin, onAdmin] = useState(false);
  useEffect(() => {
    let nameLoc = location.pathname.split("/");
    if (nameLoc[2] == "login") {
      onAdmin(false);
    } else {
      onAdmin(true);
    }
  }, [location]);

  return { isAdmin };
}
