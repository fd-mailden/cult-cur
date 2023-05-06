import React, { useState } from "react";

export function useOnActiveModalWindow() {
  const [isOpen, onShow] = useState(false);
  const onShowWindow = () => {
    onShow(!isOpen);
  };
  return { isOpen, onShowWindow };
}
