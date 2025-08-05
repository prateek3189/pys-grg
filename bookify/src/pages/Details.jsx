import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const DetailsPage = () => {
  const firebase = useFirebase();
  const params = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    firebase.getBookById(params.id).then((book) => {
      setBook(book.data());
    });
  }, []);

  if (!book) {
    return (
      <div className="container pt-5">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>Book Details</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={book.cover} alt={book.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3>{book.name}</h3>
          <p>{book.description}</p>
          <h4>Price: ${book.price}</h4>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Added by:</strong> {book.username} ({book.email})
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
