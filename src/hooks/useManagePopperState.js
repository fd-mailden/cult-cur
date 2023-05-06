import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

export function useManagePopperState(params) {
  const {
    placement = "top",
    offset = [0, 10],
    fallbackPlacements,
    keepOpen,
    open,
  } = params;

  const [isOpen, setIsOpen] = useState(!!keepOpen);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);



  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: placement,
      modifiers: [
        { name: "preventOverflow" },
        { name: "arrow", options: { element: arrowElement } },
        {
          name: "offset",
          options: {
            offset,
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: fallbackPlacements,
          },
        },
      ],
    }
  );

  useEffect(() => {
    if (keepOpen) return;

    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!referenceElement || referenceElement.contains(event.target)) {
        return;
      }
      if (!popperElement || popperElement.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [keepOpen, referenceElement, popperElement]);

  useEffect(() => {
    if (open === undefined) return;
    setIsOpen(open);
  }, [open]);

  const toggleMenu = (flag) => {
    if (flag === undefined || flag === null) {
      setIsOpen((prevValue) => !prevValue);
      return;
    }

    setIsOpen(flag);
  };

  return {
    models: { isOpen, referenceElement, styles, attributes },
    commands: {
      toggleMenu,
      setPopperElement,
      setReferenceElement,
      setArrowElement,
      update,
    },
  };
}
