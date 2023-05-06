import React, { useState } from "react";
import { postFirebaseRequest } from "../api/carRequests";
import { useToastManager } from "../hooks/useToastManager";
function usePostData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { someToast } = useToastManager();

  function postingData(collection, data) {
    setLoading(true);
    postFirebaseRequest(collection, data)
      .then((res) => {
        setLoading(false);
        setData(res);
        someToast("Спасибо за заявление 🦄", "success");
      })
      .catch((err) => {
        setError(true);
        setLoading(false)
        someToast("try again later", "error");
      });
  }

  return { data, loading, error, postingData };
}

export { usePostData };
