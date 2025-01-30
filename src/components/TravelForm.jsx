// TravelForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TravelForm.css';

const TravelForm = ({ addData }) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    startingPoint: '',
    destination: '',
    transportation: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    navigate('/table');
  };

  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />
      </label>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        Starting Point:
        <select name="startingPoint" value={formData.startingPoint} onChange={handleChange}>
        <option value="">-</option>
          <option value="CASABLANCA">CASABLANCA</option>
          <option value="DAKHLA">DAKHLA</option>
          <option value="TANGIER">TANGIER</option>
          <option value="FES">FES</option>
          <option value="MARRAKECH">MARRAKECH</option>
          <option value="AGADIR">AGADIR</option>
          <option value="ESSAOUIRA">ESSAOUIRA</option>
        </select>
      </label>
      <label>
        Destination:
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">-</option>
          <option value="CASABLANCA">CASABLANCA</option>
          <option value="DAKHLA">DAKHLA</option>
          <option value="TANGIER">TANGIER</option>
          <option value="FES">FES</option>
          <option value="MARRAKECH">MARRAKECH</option>
          <option value="AGADIR">AGADIR</option>
          <option value="ESSAOUIRA">ESSAOUIRA</option>
        </select>
      </label>
      <label>
        Transportation:
        <select name="transportation" value={formData.transportation} onChange={handleChange}>
        <option value="">-</option>
          <option value="CAR">CAR</option>
          <option value="BUS">BUS</option>
          <option value="PLANE">PLANE</option>
          <option value="TRAIN">TRAIN</option>
        </select>
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default TravelForm;