import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TravelTable.css';

const TravelTable = ({ data, deleteData }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/confirmation', { state: { formData: data } });
  };

  const handleEdit = (item) => {
    navigate('/edit', { state: { formData: item } });
  };

  const handleDelete = (id) => {
    deleteData(id);
  };

  return (
    <div className="travel-table-container">
      <h1>Travel Data</h1>
      <Link to="/form">
        <button>Add New Entry</button>
      </Link>
      <button onClick={handleConfirm} disabled={data.length === 0}>Confirm</button>
      <table className="travel-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Starting Point</th>
            <th>Destination</th>
            <th>Transportation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.startingPoint}</td>
              <td>{item.destination}</td>
              <td>{item.transportation}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TravelTable;