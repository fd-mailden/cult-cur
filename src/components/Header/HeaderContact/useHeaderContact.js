import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useSelector } from "react-redux";
import { selectContact, selectLoading } from "../../../store/cars/carSelectors";
export function useHeaderContact() {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContact);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  return { isOpen, setOpen, ref, isLoading, contacts };
}
