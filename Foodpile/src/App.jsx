import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    expiryDate: "",
    dietaryType: "",
    amount: ""
  })

  const dialog = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
    setFormData({
      name: "",
      expiryDate: "",
      dietaryType: "",
      amount: ""
    })
    dialog.current.showModal();
  }

  return (
    <>
      <h1>Foodpile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
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
      <dialog ref={dialog}>
        <p>Form submitted successfully!</p>
        <button onClick={() => dialog.current.close()}>Close</button>
      </dialog>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
