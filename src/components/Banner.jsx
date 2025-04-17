import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1>코딩알려주는 누나 도서관</h1>
          </Col>
          <Col md={4}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="책 제목이나 작가를 검색하세요"
              />
              <Button variant="primary" className="ms-2">
                검색
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
