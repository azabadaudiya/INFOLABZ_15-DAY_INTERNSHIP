import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Table } from 'react-bootstrap';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://inshortsapi.vercel.app/news?category=sports')
      .then(response => {
        setNews(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching the news data:', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <h1 className="mb-4">Sports News</h1>
        <Table striped bordered>
          <thead className="table-dark">
            <tr>
              <th>Sr No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.date}, {item.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
