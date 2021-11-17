import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const BookAddForm = () => {
  const { dispatch } = useContext(BookContext);
  const [formState, setFormState] = useState({});

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      payload: formState,
    });

    handleReset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleReset = (e) => {
    setFormState({});
  };

  return (
    <div style={{ maxWidth: "70%", margin: "auto" }}>
      <form onSubmit={handleFormSubmit} onReset={handleReset}>
        <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input
            className="form-control"
            onChange={handleChange}
            value={formState.title || ""}
            type="text"
            placeholder="add book"
            name="title"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Book Author</label>
          <input
            className="form-control"
            value={formState.author || ""}
            onChange={handleChange}
            type="text"
            name="author"
            id="author"
            placeholder="add book"
          />
        </div>
        <div>
          <button className="btn btn-primary m-2" type="submit">
            Add Book
          </button>
          <button className="btn btn-primary m-2" type="reset">
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAddForm;
