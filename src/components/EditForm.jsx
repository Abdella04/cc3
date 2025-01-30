// EditForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EditForm.css';

const EditForm = ({ updateData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  const [formState, setFormState] = useState(formData || {});

  useEffect(() => {
    if (formData) {
      setFormState(formData);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(formState);
    navigate('/table');
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={formState.id} onChange={handleChange} required />
      </label>
      <label>
        First Name:
        <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} required />
      </label>
      <label>
        Starting Point:
        <select name="startingPoint" value={formState.startingPoint} onChange={handleChange}>
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
        <select name="destination" value={formState.destination} onChange={handleChange}>
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
        <select name="transportation" value={formState.transportation} onChange={handleChange}>
          <option value="CAR">CAR</option>
          <option value="BUS">BUS</option>
          <option value="PLANE">PLANE</option>
          <option value="TRAIN">TRAIN</option>
        </select>
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditForm;