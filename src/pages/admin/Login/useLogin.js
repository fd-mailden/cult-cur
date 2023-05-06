import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaLogin from "../../../helpers/yup/yupLogin";
import { useDispatch } from "react-redux";
import { useToastManager } from "../../../hooks/useToastManager";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "react-query";
import {
  onAuth,
  setUser,
  setAccessToken,
} from "../../../store/auth/authReducer";

export function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaLogin) });
  const { someToast } = useToastManager();

  const dispatch = useDispatch();
  const onSubmit = (formData) => handleLogin.mutate(formData);
  const auth = getAuth();
  function unAuth(Data) {
    return signInWithEmailAndPassword(auth, Data.login, Data.password);
  }
  const handleLogin = useMutation((formData) => unAuth(formData));

  useEffect(() => {
    if (handleLogin.isSuccess) {
      dispatch(onAuth(true));
      dispatch(
        setUser({
          uid: handleLogin.data.user.uid,
          email: handleLogin.data.user.email,
        })
      );
      dispatch(setAccessToken(handleLogin.data.user.accessToken));
      someToast("Welcome to admin panel  ", "success");
    }
  }, [handleLogin.isSuccess]);
  useEffect(() => {
    if (handleLogin.isError) {
      someToast("Try again !", "error");
    }
  }, [handleLogin.isError]);

  console.log(handleLogin);
  return {
    register,
    errors,
    isLoading: handleLogin.isLoading,
    handleSubmit: handleSubmit(onSubmit),
  };
}
