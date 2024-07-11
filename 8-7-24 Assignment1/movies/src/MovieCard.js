// Import necessary libraries and components
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// MovieCard component
const MovieCard = ({ movie }) => {
  let buttonVariant = 'primary';

  // Determine button variant based on movie status
  if (movie.status === 'Upcoming') {
    buttonVariant = 'success'; // Green color for upcoming
  } else if (movie.status === 'Not Showing') {
    buttonVariant = 'primary'; // Blue color for not showing
  }

  return (
  <Col md={4} className="mb-4">
    <Card>
    <Button variant={buttonVariant}>{movie.status}</Button>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
      
        
          {movie.actors.map((actor, index) => (
            <Card.Footer className='actors'>
            <small className="text-muted">
            <span key={index}>
              {actor}
              {index !== movie.actors.length - 1}
            </span>
            </small>
            </Card.Footer>
          ))}
         <Card.Footer>
         <small className="text-muted">
          <span><i>{movie.type}</i></span>
         </small>
         </Card.Footer>
      
    </Card>
  </Col>
);
}
export default MovieCard;
