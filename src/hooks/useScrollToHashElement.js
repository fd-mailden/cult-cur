import React, { useEffect } from "react";

export const useScrollToHashElement = () => {
    const { hash } = window.location;
    useEffect(() => {
        const elementToScroll = document.getElementById(hash?.replace("#", ""));
        if (!elementToScroll) return

        window.scrollTo({
            top: elementToScroll.offsetTop - 0,
            behavior: "smooth"
        });
    }, [hash])
};