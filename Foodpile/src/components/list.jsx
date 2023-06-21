import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function List({ items, toggleNotify, notifyItems, handleDelete }) {
  return (
    <div className="list-container">
      <h2>Groceries: </h2>
      {items.map((item) => (
        <div key={item.id} className="list-item">
          <h3>{item.name}</h3>
          <p>Expiry Date: {item.expiryDate}</p>
          <FontAwesomeIcon
            icon={faBell}
            onClick={() => toggleNotify(item.id)}
            style={{
              cursor: "pointer",
              color: notifyItems[item.id] ? "green" : "gray",
              marginRight: "10px",
            }}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }} />
        </div>
      ))}
    </div>
  );
}

export default List;