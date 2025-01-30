import React, { useState, useEffect } from 'react';
import './Dakhla.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for the sites
import lagoon from '../components/lagoon.jpg'; // Adjust path as needed
import dragonIsland from '../components/dragonIsland.jpg'; // Adjust path as needed
import whiteDune from '../components/whiteDune.jpg'; // Adjust path as needed

// Placeholder for reviews
const reviews = [
  {
    name: "John Doe",
    review: "La lagune de Dakhla est absolument magnifique et parfaite pour les sports nautiques.",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Lagune de Dakhla",
  },
  {
    name: "Jane Smith",
    review: "L'île du Dragon est un endroit magique à visiter, surtout au coucher du soleil.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Île du Dragon",
  },
  {
    name: "Ahmed Ali",
    review: "La Dune Blanche est un lieu unique avec des paysages à couper le souffle.",
    rating: 5,
    photo: "path/to/ahmed.jpg",
    site: "Dune Blanche",
  },
  {
    name: "Marie Dupont",
    review: "J'ai adoré faire du kitesurf sur la lagune de Dakhla. Un endroit incroyable pour les amateurs de sports nautiques.",
    rating: 5,
    photo: "path/to/marie.jpg",
    site: "Lagune de Dakhla",
  },
  {
    name: "Pierre Martin",
    review: "La Dune Blanche offre une vue imprenable et est l'endroit parfait pour se détendre et profiter du silence.",
    rating: 4,
    photo: "path/to/pierre.jpg",
    site: "Dune Blanche",
  },
];

const Dakhla = () => {
  const [showReviews, setShowReviews] = useState({
    "Lagune de Dakhla": false,
    "Île du Dragon": false,
    "Dune Blanche": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="city-container">
      <h1 className="city-title">Bienvenue à Dakhla</h1>
      
      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Lagune de Dakhla")}>
          <img src={lagoon} alt="Lagune de Dakhla" className="city-image" />
          <div className="city-info-hover">
            <h2>Lagune de Dakhla</h2>
            <p>La lagune de Dakhla est un paradis pour les amateurs de sports nautiques et offre des vues à couper le souffle sur l'océan Atlantique.</p>
          </div>
        </div>
        {showReviews["Lagune de Dakhla"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.8</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Lagune de Dakhla").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Île du Dragon")}>
          <img src={dragonIsland} alt="Île du Dragon" className="city-image" />
          <div className="city-info-hover">
            <h2>Île du Dragon</h2>
            <p>L'île du Dragon est une petite île au large de Dakhla, connue pour ses formations rocheuses uniques et ses magnifiques couchers de soleil.</p>
          </div>
        </div>
        {showReviews["Île du Dragon"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.7</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Île du Dragon").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Dune Blanche")}>
          <img src={whiteDune} alt="Dune Blanche" className="city-image" />
          <div className="city-info-hover">
            <h2>Dune Blanche</h2>
            <p>La Dune Blanche est une immense dune de sable située près de la lagune de Dakhla, offrant un paysage désertique spectaculaire.</p>
          </div>
        </div>
        {showReviews["Dune Blanche"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.8</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Dune Blanche").map((review, index) => (
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

export default Dakhla;