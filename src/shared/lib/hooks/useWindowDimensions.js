import {useEffect, useState} from "react";
import {SMALL_SCREEN} from "../../constants/constants";

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height
  };
}

// хук для получения размеров страницы

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowDimensions.width < SMALL_SCREEN

  return {...windowDimensions, isSmallScreen};
}
