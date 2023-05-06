import React from "react";
import { ToastContainer, toast } from "react-toastify";

export function useToastManager() {
  const someToast = (text = "text", type = "info") =>
    toast[type](text, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return { someToast };
}
