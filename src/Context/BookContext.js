import React, { createContext, useReducer } from "react";
import { bookReducer } from "../Reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
