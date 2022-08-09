import { useState, useEffect, useRef } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    isPortrait: height > width,
    isLandscape: width >= height,
    orientation: height > width ? "portrait" : "landscape"
  };
}

export default function useScreen() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const appHeight = useRef(window.innerHeight);
  //console.log(window.innerHeight)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {...windowDimensions, appHeight: appHeight.current};
}