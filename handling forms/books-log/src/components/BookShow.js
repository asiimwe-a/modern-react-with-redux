// function BookShow() {
//     return <div></div>;
// }

// export default BookShow;

import React from "react";

function BookShow({ books }) {
  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books saved yet.</p>
      )}
    </div>
  );
}

export default BookShow;
