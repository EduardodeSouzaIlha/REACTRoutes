import { createContext, useReducer} from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch(action.type ){
        case 'DARK':
            return {...state, color: "BLACK"}
        case 'WHITE':
            return {...state, color: "WHITE"} 
        case 'BLUE':
            return {...state, color: "BLUE"} 
        default: 
            return {...state}
    }
};

export const TitleColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "BLUE",
  });

  console.log("Title Color Context:", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};