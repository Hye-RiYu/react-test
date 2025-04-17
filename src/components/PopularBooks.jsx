import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Spinner } from "react-bootstrap";

const PopularBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/subjects/love.json?details=true"
        );
        setBooks(response.data.works.slice(0, 12));
        setLoading(false);
      } catch (error) {
        setError("책을 불러오는 중 문제가 발생했습니다.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="mb-4">인기도서</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {books.map((book, index) => (
          <Col key={index}>
            <Card style={{ height: "100%", minHeight: "350px" }}>
              <div style={{ height: "200px", overflow: "hidden" }}>
                <Card.Img
                  variant="top"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "1rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9rem", color: "#666" }}>
                  {book.authors?.map((author) => author.name).join(", ") ||
                    "저자 미제공"}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularBooks;
