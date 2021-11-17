import React from "react";
import BookAddForm from "./BookAddForm";
import BookList from "./BookList";

const Book = () => {
  return (
    <div>
      <div className="book">
        <h1>Reading List</h1>
        <p>You have 2 books in state</p>
      </div>
      <div className="book-list">
        <BookList />
      </div>
      <div className="book-add-form">
        <BookAddForm />
      </div>
    </div>
  );
};

export default Book;
