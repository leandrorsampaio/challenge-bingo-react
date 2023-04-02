import React, { createContext, useState } from "react";

export const FirstNameContext = createContext("");

function FirstNameProvider({ children }) {
  const [firstName, setFirstName] = useState("");

  const updateFirstName = (newFirstName) => {
    setFirstName(newFirstName);
  };

  return (
    <FirstNameContext.Provider value={{ firstName, updateFirstName }}>
      {children}
    </FirstNameContext.Provider>
  );
}

export default FirstNameProvider;