import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
  const cities = [
    {
      name: "Casablanca",
      description: "Découvrez Casablanca, la plus grande ville du Maroc, connue pour sa mosquée Hassan II et son architecture moderne.",
      imageName: 'MOSQ.jpeg', // Use imageName directly
      link: "/casa"
    },
    {
      name: "Fes",
      description: "Explorez Fes, la capitale spirituelle du Maroc, célèbre pour ses médersas et sa médina labyrinthique.",
      imageName: 'FESS.jpg',
      link: "/fes"
    },
    {
      name: "Agadir",
      description: "Visitez Agadir, une station balnéaire populaire avec des plages magnifiques et un climat ensoleillé toute l'année.",
      imageName: 'AGADIRR.jpg',
      link: "/agadir"
    },
    {
      name: "Tangier",
      description: "Découvrez Tanger, la porte d'entrée de l'Afrique avec ses vues spectaculaires sur le détroit de Gibraltar.",
      imageName: 'TANGIERR.webp',
      link: "/tangier"
    },
    {
      name: "Dakhla",
      description: "Explorez Dakhla, une destination idéale pour les amateurs de sports nautiques et les amoureux de la nature.",
      imageName: 'DAKHLAA.jpg',
      link: "/dakhla"
    },
    {
      name: "Marrakech",
      description: "Visitez Marrakech, une ville animée avec ses souks colorés, ses palais historiques et ses jardins luxuriants.",
      imageName: 'MARRAKECHH.webp',
      link: "/marrakech"
    },
    {
      name: "Essaouira",
      description: "Découvrez Essaouira, une charmante ville côtière avec une médina pittoresque et des plages de sable doré.",
      imageName: 'ESSAOUIRAA.jpg',
      link: "/essaouira"
    },
  ];

  return (
    <div className="explore-container">
      <h1 className="explore-title">Explorez les Villes du Maroc</h1>
      <div className="explore-grid">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <Link to={city.link}>
              <img src={`/images/${city.imageName}`} alt={city.name} className="city-image" />
              <div className="city-info">
                <h2>{city.name}</h2>
                <p>{city.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;