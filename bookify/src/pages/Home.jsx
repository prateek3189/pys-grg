import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BookCard from "../components/Card";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const firebase = useFirebase();
  useEffect(() => {
    firebase.getAllBooks().then((books) => {
      setBooks(books.docs);
    });
  }, []);
  return (
    <div className="container pt-5">
      <h2>My Books</h2>
      {books.map((book) => (
        <BookCard book={book.data()} key={book.id} id={book.id} />
      ))}
    </div>
  );
};

export default HomePage;
