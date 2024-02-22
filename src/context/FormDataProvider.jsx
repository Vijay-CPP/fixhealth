import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormDataProvider = ({ children }) => {
  const [city, setCity] = useState("");

  return <FormContext.Provider value={{city, setCity}}>{children}</FormContext.Provider>;
};

function useFormData() {
    const data = useContext(FormContext);
    return data;
}

export {FormDataProvider, useFormData};
