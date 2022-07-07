import React, {createContext, useState} from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [result, setResult] = useState<string>('0');
  const [firstParameter, setFirstParameter] = useState<string>('0');
  const [secondParameter, setSecondParameter] = useState<string>('0');
  const [operator, setOperator] = useState<string>('');
  const [isRomanNumeral, setRomanNumeral] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        result,
        setResult,
        operator,
        setOperator,
        firstParameter,
        setFirstParameter,
        secondParameter,
        setSecondParameter,
        isRomanNumeral,
        setRomanNumeral,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, GlobalProvider};
