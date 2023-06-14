import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./list.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    expiryDate: "",
    dietaryType: "",
    amount: "",
    notify: false,
  });

  const [items, setItems] = useState([]);

  const [notifyItems, setNotifyItems] = useState(
    JSON.parse(localStorage.getItem("notifyItems")) || {}
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialog = useRef(null);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newItem = { ...formData, id, notify: formData.notify };
    const newItems = [...items, newItem];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    setFormData({
      name: "",
      expiryDate: "",
      dietaryType: "",
      amount: "",
      notify: false,
    });
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const toggleNotify = (id) => {
    const newNotifyItems = {
      ...notifyItems,
      [id]: !notifyItems[id],
    };
    setNotifyItems(newNotifyItems);
    localStorage.setItem("notifyItems", JSON.stringify(newNotifyItems));
  };

  return (
    <>
      <div className="app-container">
        <div className="main-content">
          <h1>Foodpile</h1>
          <button onClick={() => localStorage.clear()}>Clear localStorage</button>
          <h2>Add an item to your grocery list:</h2> 
          <button id="plusButton" onClick={openDialog}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {isDialogOpen && (
            <dialog open>
              <button className="close-button" onClick={closeDialog}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <form onSubmit={handleSubmit}>
                <label>
                  Item:
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Lettuce"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Expiry Date:
                  <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Dietary Type:
                  <select
                    name="dietaryType"
                    value={formData.dietaryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="pescetarian">Pescetarian</option>
                  </select>
                </label>
                <label>
                  Amount:
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Enable notifications:
                  <input
                    type="checkbox"
                    name="notify"
                    checked={formData.notify}
                    onChange={handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </dialog>
          )}
          <dialog ref={dialog}>
            <p>Form submitted successfully!</p>
            <button onClick={() => dialog.current.close()}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </dialog>
          <p className="credits">By Gautham Srinivas</p>
        </div>
        <aside className="aside-content">
          <List
            items={items}
            notifyItems={notifyItems}
            toggleNotify={toggleNotify}
          />
        </aside>
      </div>
    </>
  );
}

export default App;
