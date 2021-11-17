import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const BookList = () => {
  const { state, dispatch } = useContext(BookContext);

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE_BOOK",
      payload: id,
    });
  };

  return (
    <>
      {state.map((book) => (
        <ul key={book.id} className="books">
          <li>
            Title : {book.title} Author: {book.author}
          </li>
          <button
            onClick={(e) => handleDelete(book.id)}
            className="btn btn-danger"
          >
            Remove Book
          </button>
        </ul>
      ))}
    </>
  );
};

export default BookList;
