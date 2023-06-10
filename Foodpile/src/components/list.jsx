import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function List() {
  // Retrieve the items from local storage
  const items = JSON.parse(localStorage.getItem('formData')) || [];

  return (
    <ul>
      {items.map((item) => (
        <li key={uuidv4()}>
          <h2>{item.name}</h2>
          <p>Expiry Date: {item.expiryDate}</p>
          <p>Dietary Type: {item.dietaryType}</p>
          <p>Amount: {item.amount}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
