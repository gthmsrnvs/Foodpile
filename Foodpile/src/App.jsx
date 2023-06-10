import { useState, useRef } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import List from './components/list.jsx';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    expiryDate: "",
    dietaryType: "",
    amount: ""
  });

  const [items, setItems] = useState([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialog = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('formData')) || [];
    items.push(formData);
    localStorage.setItem('formData', JSON.stringify(items));
    setItems([...items, formData]);
    setFormData({
      name: "",
      expiryDate: "",
      dietaryType: "",
      amount: ""
    });
    setIsDialogOpen(false);
    dialog.current.showModal();
  }

  const openDialog = () => {
    setIsDialogOpen(true);
  }

  const closeDialog = () => {
    setIsDialogOpen(false);
  }

  return (
    <>
      <h1>Foodpile</h1>
      <button id="plusButton" onClick={openDialog}><FontAwesomeIcon icon={faPlus} /></button>
      {isDialogOpen && (
        <dialog open>
          <button className="close-button" onClick={closeDialog}>
            <FontAwesomeIcon icon={faTimes} /></button>
          <form onSubmit={handleSubmit}>
            <label>
              Item:
              <input type="text" name="name" placeholder="e.g. Lettuce" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Expiry Date:
              <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
            </label>
            <label>
              Dietary Type:
              <select name="dietaryType" value={formData.dietaryType} onChange={handleChange} required>
                <option value="">--Please choose an option--</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="pescetarian">Pescetarian</option>
              </select>
            </label>
            <label>
              Amount:
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </dialog>
      )}
      <List />
      <dialog ref={dialog}>   
        <p>Form submitted successfully!</p>
        <button onClick={() => dialog.current.close()}><FontAwesomeIcon icon={faTimes} /></button>
      </dialog>
      <p className="credits">
        By Gautham Srinivas
      </p>
    </>
  );
}

export default App;
