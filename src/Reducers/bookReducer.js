import { v4 as uuidv4 } from "uuid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          ...action.payload,
          id: uuidv4(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
