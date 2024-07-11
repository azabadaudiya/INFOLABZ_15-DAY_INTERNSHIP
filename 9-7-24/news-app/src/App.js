import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container mt-5">
            <h1>Sports News</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.date}</td>
                            <td>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default App;
