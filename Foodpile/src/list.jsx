import React, { useEffect, useState } from 'react';

function List({ items }) {
  return (
    <div className="list-container">
      <h2>Groceries: </h2>
      {items.map((item, index) => (
        <div key={index} className="list-item">
          <h3>{item.name}</h3>
          <p>Expiry Date: {item.expiryDate}</p>
        </div>
      ))}
    </div>
  );
}


export default List;
