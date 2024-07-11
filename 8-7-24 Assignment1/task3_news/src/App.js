import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewsCard from './NewsCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://inshorts.vercel.app/news/top')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the data to inspect its structure
        if (data && data.data && data.data.articles) {
          setNews(data.data.articles);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching the news data:', error));
  }, []);

  return (
    <Container>
      <h1 className="text-center my-5">Top News</h1>
      <Row>
        {news.length > 0 ? (
          news.map((newsItem, index) => (
            <NewsCard key={index} news={newsItem} />
          ))
        ) : (
          <p>No news available</p>
        )}
      </Row>
    </Container>
  );
};

export default App;
