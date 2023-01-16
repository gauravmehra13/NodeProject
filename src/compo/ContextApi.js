import React from "react";
import { createContext, useState } from "react";
import mountainBig from "./mountain.jpg";
import mountainSmall from "./mountainSmall.jpg";

export const ContextData = createContext();

export const ProvideData = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      category: "mountain",
      image: mountainBig,
      name: "rigi",
      height: "1798m",
    },

    {
      id: 2,
      category: "mountain",
      name: "stanserhorn",
      image: mountainSmall,
      height: "1898m",
    },
  ]);

  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  );
};
