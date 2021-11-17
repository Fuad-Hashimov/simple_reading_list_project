import "./App.css";
import Book from "./Components/Book";
import BookContextProvider from "./Context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Book />
      </BookContextProvider>
    </div>
  );
}

export default App;
