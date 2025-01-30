// ConfirmationPage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import data from './data.json';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  const [durations, setDurations] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (formData && Array.isArray(formData)) {
      const fetchedDurations = formData.map((trip) => {
        const tripData = data.routes.find(
          (route) => route.from.toLowerCase() === trip.startingPoint.toLowerCase() && route.to.toLowerCase() === trip.destination.toLowerCase()
        );
        console.log('Trip Data:', tripData); // Debug log
        return tripData ? tripData.transportation[trip.transportation.toLowerCase()] : 'Not available';
      });
      console.log('Fetched Durations:', fetchedDurations); // Debug log
      setDurations(fetchedDurations);

      const price = fetchedDurations.reduce((acc, duration, index) => {
        if (duration !== 'Not available') {
          const hours = parseFloat(duration.split(' ')[0]);
          const transportation = formData[index].transportation.toLowerCase();
          let rate = 0;
          switch (transportation) {
            case 'car':
              rate = 10;
              break;
            case 'bus':
              rate = 8;
              break;
            case 'plane':
              rate = 50;
              break;
            case 'train':
              rate = 12;
              break;
            default:
              rate = 0;
          }
          return acc + hours * rate;
        }
        return acc;
      }, 0);
      console.log('Total Price:', price); // Debug log
      setTotalPrice(price);
    }
  }, [formData]);

  const handleBuyTicket = () => {
    navigate('/form');
  };

  if (!formData || !Array.isArray(formData)) {
    return <div>No data available</div>;
  }

  return (
    <div className="confirmation-page">
      <h1>Confirmation Page</h1>
      {formData.map((trip, index) => (
        <div key={trip.id} className="trip-details">
          <p>ID: {trip.id}</p>
          <p>First Name: {trip.firstName}</p>
          <p>Last Name: {trip.lastName}</p>
          <p>Starting Point: {trip.startingPoint}</p>
          <p>Destination: {trip.destination}</p>
          <p>Transportation: {trip.transportation}</p>
          <p>Duration: {durations[index]}</p>
        </div>
      ))}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <button className="buy-ticket-button" onClick={handleBuyTicket}>Buy a Ticket</button>
    </div>
  );
};

export default ConfirmationPage;