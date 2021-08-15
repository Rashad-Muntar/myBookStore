import React, {useState} from "react";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";

const bookData = [

]

function App() {

  const [initBooks, setBook] = useState(bookData)

  const addBookHandler = book => {
    setBook(prevData =>{
      return[...prevData, book]
    })
  };


  return (
    <div className="App">
      <BookList books={initBooks}/>
      <BookForm onAddBook={addBookHandler}/>
    </div>
  );
}

export default App;
