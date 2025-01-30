import React, { useState, useEffect } from 'react';
import './Agadir.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for the sites
import kasbah from '../components/kasbah.jpg'; // Adjust path as needed
import soukElHad from '../components/soukElHad.jpg'; // Adjust path as needed
import marina from '../components/marina.jpg'; // Adjust path as needed

// Placeholder for reviews
const reviews = [
  {
    name: "John Doe",
    review: "La Kasbah offre une vue imprenable sur la ville et l'océan. Un endroit incontournable!",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Kasbah d'Agadir",
  },
  {
    name: "Jane Smith",
    review: "Le Souk El Had est un marché vibrant avec une grande variété de produits locaux.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Souk El Had",
  },
  {
    name: "Ahmed Ali",
    review: "La Marina d'Agadir est un endroit fantastique pour se détendre et profiter de la vue.",
    rating: 5,
    photo: "path/to/ahmed.jpg",
    site: "Marina d'Agadir",
  },
  {
    name: "Marie Dupont",
    review: "J'ai adoré me promener dans le souk et découvrir les épices et artisanats locaux.",
    rating: 4,
    photo: "path/to/marie.jpg",
    site: "Souk El Had",
  },
  {
    name: "Pierre Martin",
    review: "La Kasbah est un vestige historique fascinant avec une vue panoramique sur Agadir.",
    rating: 5,
    photo: "path/to/pierre.jpg",
    site: "Kasbah d'Agadir",
  },
];

const Agadir = () => {
  const [showReviews, setShowReviews] = useState({
    "Kasbah d'Agadir": false,
    "Souk El Had": false,
    "Marina d'Agadir": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="city-container">
      <h1 className="city-title">Bienvenue à Agadir</h1>
      
      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Kasbah d'Agadir")}>
          <img src={kasbah} alt="Kasbah d'Agadir" className="city-image" />
          <div className="city-info-hover">
            <h2>Kasbah d'Agadir</h2>
            <p>La Kasbah d'Agadir est une ancienne forteresse perchée sur une colline, offrant une vue spectaculaire sur la ville et l'océan Atlantique.</p>
          </div>
        </div>
        {showReviews["Kasbah d'Agadir"] && (
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
            {reviews.filter(review => review.site === "Kasbah d'Agadir").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Souk El Had")}>
          <img src={soukElHad} alt="Souk El Had" className="city-image" />
          <div className="city-info-hover">
            <h2>Souk El Had</h2>
            <p>Le Souk El Had est le plus grand marché d'Agadir, connu pour ses étals colorés et ses produits locaux allant des épices aux textiles.</p>
          </div>
        </div>
        {showReviews["Souk El Had"] && (
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
            {reviews.filter(review => review.site === "Souk El Had").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Marina d'Agadir")}>
          <img src={marina} alt="Marina d'Agadir" className="city-image" />
          <div className="city-info-hover">
            <h2>Marina d'Agadir</h2>
            <p>La Marina d'Agadir est un lieu moderne et animé avec des boutiques, des restaurants et une vue magnifique sur l'océan.</p>
          </div>
        </div>
        {showReviews["Marina d'Agadir"] && (
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
            {reviews.filter(review => review.site === "Marina d'Agadir").map((review, index) => (
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

export default Agadir;