import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NewsCard = ({ news }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
      <Button variant="success">{news.categoryNames[0]}</Button>
        <Card.Img variant="top" src={news.imageUrl} alt={news.title} />
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><i>Author Name : {news.authorName}</i></small>
          
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NewsCard;
