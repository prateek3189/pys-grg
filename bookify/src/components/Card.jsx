import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
// import { useFirebase } from "../context/Firebase";

function BookCard({ book, id }) {
  const navigate = useNavigate();
  // const firebase = useFirebase();

  // const [url, setUrl] = useState("");

  useEffect(() => {
    // firebase.getImageUrl(book.cover).then((url) => {
    //   setUrl(url);
    // });
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Button variant="primary" onClick={(e) => navigate(`/book/view/${id}`)}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
