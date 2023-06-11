import React, { useEffect, useState } from 'react';

function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('formData_'));
    const storedItems = keys.map(key => JSON.parse(localStorage.getItem(key)));
    setItems(storedItems);
  }, []);

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
