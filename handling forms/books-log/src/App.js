import { useState } from "react";
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    // const createBook = (title) => {
    //     console.log('Need to add book with:', title);
    // };

    const createBook = (title) => {
        const newBook = { title };
        setBooks([...books, newBook]);
      };

    return <div>
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;