import React from 'react';
import './Books.scss';

interface booksProps {
  show?: boolean;
}

function Books({ show }: booksProps) {
  return (
    <>
      {show && (
        <div className="books-container">
          <h1>Books</h1>
        </div>
      )}
    </>
  );
}

export default Books;
