import React, { createContext, useState } from "react";

export const AddStudentContext = createContext();

const AddStudentContextWrapper = ({ children }) => {
  const [isData, setIsData] = useState(false);

  return (
    <AddStudentContext.Provider value={{ isData, setIsData }}>
      {children}
    </AddStudentContext.Provider>
  );
};

export default AddStudentContextWrapper;
