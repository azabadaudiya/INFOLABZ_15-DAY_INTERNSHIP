import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const[data,setData]=useState([]);
  
    useEffect(() => {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            setData(response.data.bpi.USD);
          })
          .catch(error => {
              console.error('Error fetching the news data:', error);
          });
  }, []);
  return (
    <h1>{data.rate}</h1>
  );
}

export default App;
