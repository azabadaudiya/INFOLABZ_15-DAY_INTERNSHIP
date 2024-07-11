// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [spacecrafts, setSpacecrafts] = useState([]);

  useEffect(() => {
    axios.get('https://isro.vercel.app/api/spacecrafts')
      .then(response => {
        setSpacecrafts(response.data.spacecrafts);
      })
      .catch(error => {
        console.error('Error fetching the spacecraft data:', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <h1 className="mb-4">ISRO Spacecrafts</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>SPACE CRAFT</th>
            </tr>
          </thead>
          <tbody>
            {spacecrafts.map((spacecraft, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{spacecraft.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default App;
