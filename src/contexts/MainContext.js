import React, { useState } from "react";
import hiragana from "./../data/hiragana";
import katakana from "./../data/katakana";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {

  const [selectedChars, setSelectedChars] = useState([]);
  const kana = { hiragana, katakana }

  return (
    <MainContext.Provider value={{ kana, selectedChars, setSelectedChars }}>
      {children}
    </MainContext.Provider>
  );
};
