import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectComparison,
} from "../store/local/localSelectors";
import {useToastManager} from './useToastManager' 

function useStateEffect(initState, name) {
  const { someToast } = useToastManager();

  const [stateLength, setStateLength] = useState(initState);
  useEffect(() => {
    if (initState > stateLength) {
      someToast(`Было добавлено в блок ${name}`, 'info')
    }
    if (initState < stateLength) {
      someToast(`Было удаленно из блока ${name}`, 'info')
    }
    setStateLength(initState);
  }, [initState]);
}

function useStateWatcher() {
  const favorites = useSelector(selectFavorites);
  const comparison = useSelector(selectComparison);

  useStateEffect(favorites.length, "Избранное");
  useStateEffect(comparison.length, "Сравнение");
}
export { useStateWatcher };
