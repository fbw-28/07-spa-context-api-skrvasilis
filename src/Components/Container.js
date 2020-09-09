import React, { useState } from "react";
import MyContext from "../Context/MyContext";

export default function Container(props) {
  const [x, incrementX] = useState(10);
  const [y, incrementY] = useState(13);

  return (
    <MyContext.Provider value={{ x, incrementX, y, incrementY }}>
      {props.children}
    </MyContext.Provider>
  );
}
