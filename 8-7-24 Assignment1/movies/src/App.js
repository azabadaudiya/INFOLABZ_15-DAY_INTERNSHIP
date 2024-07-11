// Import necessary libraries and components
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard'; // Import the MovieCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Sample movie data (placeholders)
const movies = [
  { id: 1, title: 'Deewar', image: '/imgs/image1.png', description: 'Deewaar was released worldwide on 24 January 1975 to critical acclaim from critics with praise for its story, script, music and cast performances (especially Bachchan, Kapoor and Roy)',actors:['Amitab Bachan','Neetu Singh'],type:'Thriller,Suspense' ,status:'Not Showing'},
  { id: 2, title: 'Star Into Darkness', image: '/imgs/image2.png', description: 'Star Trek Into Darkness is a 2013 American science fiction action film directed by J. J. Abrams and written by Roberto Orci, Alex Kurtzman, and Damon Lindelof.[3] ' ,actors:[	
    'John Cho',
    'Benedict Cumberbatch'],type:'Thriller,Suspense',status:'Upcoming' },
  { id: 3, title: 'The Explosion', image: '/imgs/image3.png', description: 'Zhao Xudong is a blaster technician. When an explosion happens in the mine and kills four workers, Zhao survives' ,actors:['Yihong','DuanNan'],type:'Thriller,Suspense',status:'Not Showing' },
  { id: 4, title: 'JackPot', image: '/imgs/image4.png', description: 'Star Trek Into Darkness is a 2013 American science fiction action film directed by J. J. Abrams and written by Roberto Orci, Alex Kurtzman, and Damon Lindelof.[3] ' ,actors:[	
    'John Cho',
    'Benedict Cumberbatch'],type:'Thriller,Suspense',status:'Upcoming'},
  { id: 5, title: 'Sodagar', image: '/imgs/image5.png', description: 'Zhao Xudong is a blaster technician. When an explosion happens in the mine and kills four workers, Zhao survives' ,actors:['Yihong','DuanNan'],type:'Thriller,Suspense' ,status:'Not Showing' },
  { id: 6, title: 'Chennai Express', image: '/imgs/image6.png', description: 'Deewaar was released worldwide on 24 January 1975 to critical acclaim from critics with praise for its story, script, music and cast performances (especially Bachchan, Kapoor and Roy)',actors:['Amitab Bachan','Neetu Singh'],type:'Thriller,Suspense' ,status:'Not Showing'},
  { id: 7, title: 'Maakran', image: '/imgs/image7.png', description: 'Star Trek Into Darkness is a 2013 American science fiction action film directed by J. J. Abrams and written by Roberto Orci, Alex Kurtzman, and Damon Lindelof.[3] ' ,actors:[	
    'John Cho',
    'Benedict Cumberbatch'],type:'Thriller,Suspense' ,status:'Not Showing'},
  { id: 8, title: 'Tiger', image: '/imgs/image8.png', description: 'Zhao Xudong is a blaster technician. When an explosion happens in the mine and kills four workers, Zhao survives' ,actors:['Yihong','DuanNan'],type:'Thriller,Suspense'  ,status:'Not Showing'},
  { id: 9, title: 'Tanhaji', image: '/imgs/image9.png', description: 'Deewaar was released worldwide on 24 January 1975 to critical acclaim from critics with praise for its story, script, music and cast performances (especially Bachchan, Kapoor and Roy)',actors:['Amitab Bachan','Neetu Singh'],type:'Thriller,Suspense',status:'Upcoming' },
];

// App component
const App = () => (
  <Container>
    <h1 className="text-center my-5">Movie Information</h1>
    <Row>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Row>
  </Container>
);

export default App;
