import React, { useState, useEffect } from 'react';
import './Tangier.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for the sites
import kasbah from '../components/kasbahh.jpg'; // Adjust path as needed
import medina from '../components/medina.jpg'; // Adjust path as needed
import capSpartel from '../components/capSpartel.jpg'; // Adjust path as needed

// Placeholder for reviews
const reviews = [
  {
    name: "John Doe",
    review: "La Kasbah de Tanger est un lieu historique fascinant avec une vue magnifique sur le détroit de Gibraltar.",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Kasbah de Tanger",
  },
  {
    name: "Jane Smith",
    review: "La Médina de Tanger est un dédale de ruelles charmantes, parfait pour se perdre et explorer.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Médina de Tanger",
  },
  {
    name: "Ahmed Ali",
    review: "Le Cap Spartel offre des vues panoramiques incroyables et un phare historique.",
    rating: 5,
    photo: "path/to/ahmed.jpg",
    site: "Cap Spartel",
  },
  {
    name: "Marie Dupont",
    review: "J'ai adoré me promener dans la Médina et découvrir les boutiques locales et les cafés.",
    rating: 4,
    photo: "path/to/marie.jpg",
    site: "Médina de Tanger",
  },
  {
    name: "Pierre Martin",
    review: "La Kasbah est un lieu incontournable avec son histoire riche et son architecture impressionnante.",
    rating: 5,
    photo: "path/to/pierre.jpg",
    site: "Kasbah de Tanger",
  },
];

const Tangier = () => {
  const [showReviews, setShowReviews] = useState({
    "Kasbah de Tanger": false,
    "Médina de Tanger": false,
    "Cap Spartel": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="city-container">
      <h1 className="city-title">Bienvenue à Tanger</h1>
      
      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Kasbah de Tanger")}>
          <img src={kasbah} alt="Kasbah de Tanger" className="city-image" />
          <div className="city-info-hover">
            <h2>Kasbah de Tanger</h2>
            <p>La Kasbah de Tanger est une ancienne forteresse située sur les hauteurs de la ville, offrant une vue imprenable sur le détroit de Gibraltar.</p>
          </div>
        </div>
        {showReviews["Kasbah de Tanger"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.5</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Kasbah de Tanger").map((review, index) => (
              <div className="review" key={index}>
                <div className="review-header">
                  <img src={review.photo} alt={`${review.name}`} className="review-photo" />
                  <div>
                    <h3>{review.name}</h3>
                    <div className="stars">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      {Array(5 - review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star inactive">★</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p>{review.review}</p>
              </div>
            ))}

            <section className="review-form">
              <h2>Soumettez Votre Avis</h2>
              <form>
                <input type="text" placeholder="Votre Nom" required className="form-input" />
                <textarea placeholder="Votre Avis" required className="form-textarea"></textarea>
                <div className="rating-selector">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <button type="submit" className="submit-button">Soumettre</button>
              </form>
            </section>
          </section>
        )}
      </section>

      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Médina de Tanger")}>
          <img src={medina} alt="Médina de Tanger" className="city-image" />
          <div className="city-info-hover">
            <h2>Médina de Tanger</h2>
            <p>La Médina de Tanger est un dédale de ruelles étroites et de maisons traditionnelles, offrant un aperçu authentique de la vie marocaine.</p>
          </div>
        </div>
        {showReviews["Médina de Tanger"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.5</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Médina de Tanger").map((review, index) => (
              <div className="review" key={index}>
                <div className="review-header">
                  <img src={review.photo} alt={`${review.name}`} className="review-photo" />
                  <div>
                    <h3>{review.name}</h3>
                    <div className="stars">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      {Array(5 - review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star inactive">★</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p>{review.review}</p>
              </div>
            ))}

            <section className="review-form">
              <h2>Soumettez Votre Avis</h2>
              <form>
                <input type="text" placeholder="Votre Nom" required className="form-input" />
                <textarea placeholder="Votre Avis" required className="form-textarea"></textarea>
                <div className="rating-selector">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <button type="submit" className="submit-button">Soumettre</button>
              </form>
            </section>
          </section>
        )}
      </section>

      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Cap Spartel")}>
          <img src={capSpartel} alt="Cap Spartel" className="city-image" />
          <div className="city-info-hover">
            <h2>Cap Spartel</h2>
            <p>Le Cap Spartel est un promontoire rocheux situé à l'extrémité nord-ouest de l'Afrique, offrant des vues spectaculaires et abritant un phare historique.</p>
          </div>
        </div>
        {showReviews["Cap Spartel"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 5.0</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Cap Spartel").map((review, index) => (
              <div className="review" key={index}>
                <div className="review-header">
                  <img src={review.photo} alt={`${review.name}`} className="review-photo" />
                  <div>
                    <h3>{review.name}</h3>
                    <div className="stars">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      {Array(5 - review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star inactive">★</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p>{review.review}</p>
              </div>
            ))}

            <section className="review-form">
              <h2>Soumettez Votre Avis</h2>
              <form>
                <input type="text" placeholder="Votre Nom" required className="form-input" />
                <textarea placeholder="Votre Avis" required className="form-textarea"></textarea>
                <div className="rating-selector">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <button type="submit" className="submit-button">Soumettre</button>
              </form>
            </section>
          </section>
        )}
      </section>
    </div>
  );
};

export default Tangier;