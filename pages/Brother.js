// pages/brother.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BrotherPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('/Api/item'); // Correct API route path
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items from Brother Collection</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrotherPage;
