import React, { useState, useEffect } from 'react';
import './Fes.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for the sites
import babBoujloud from '../components/babBoujloud.jpg'; // Adjust path as needed
import karaouine from '../components/karaouine.jpg'; // Adjust path as needed
import tannery from '../components/tannery.jpg'; // Adjust path as needed

// Placeholder for reviews
const reviews = [
  {
    name: "John Doe",
    review: "Le Bab Boujloud est une porte magnifique qui mène à la vieille médina de Fès. Un must pour les visiteurs!",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Bab Boujloud",
  },
  {
    name: "Jane Smith",
    review: "La Medersa Bou Inania est incroyable avec ses détails architecturaux exquis.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Bab Boujloud",
  },
  {
    name: "Ahmed Ali",
    review: "La mosquée Karaouine est impressionnante, un centre de connaissance historique.",
    rating: 5,
    photo: "path/to/ahmed.jpg",
    site: "Mosquée Karaouine",
  },
  {
    name: "Marie Dupont",
    review: "Le quartier des tanneurs est fascinant, bien que l'odeur puisse être forte.",
    rating: 4,
    photo: "path/to/marie.jpg",
    site: "Quartier des Tanneurs",
  },
  {
    name: "Pierre Martin",
    review: "Voir les tanneurs travailler dans les fosses de teinture est une expérience unique.",
    rating: 5,
    photo: "path/to/pierre.jpg",
    site: "Quartier des Tanneurs",
  },
];

const Fes = () => {
  const [showReviews, setShowReviews] = useState({
    "Bab Boujloud": false,
    "Mosquée Karaouine": false,
    "Quartier des Tanneurs": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="city-container">
      <h1 className="city-title">Bienvenue à Fès</h1>
      
      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Bab Boujloud")}>
          <img src={babBoujloud} alt="Bab Boujloud" className="city-image" />
          <div className="city-info-hover">
            <h2>Bab Boujloud</h2>
            <p>Bab Boujloud est une porte monumentale ornée, construite en 1913, qui marque l'entrée principale de la médina de Fès.</p>
          </div>
        </div>
        {showReviews["Bab Boujloud"] && (
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
            {reviews.filter(review => review.site === "Bab Boujloud").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Mosquée Karaouine")}>
          <img src={karaouine} alt="Mosquée Karaouine" className="city-image" />
          <div className="city-info-hover">
            <h2>Mosquée Karaouine</h2>
            <p>La mosquée et université Karaouine, fondée en 859, est l'une des plus anciennes institutions d'enseignement supérieur au monde.</p>
          </div>
        </div>
        {showReviews["Mosquée Karaouine"] && (
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
            {reviews.filter(review => review.site === "Mosquée Karaouine").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Quartier des Tanneurs")}>
          <img src={tannery} alt="Quartier des Tanneurs" className="city-image" />
          <div className="city-info-hover">
            <h2>Quartier des Tanneurs</h2>
            <p>Le Quartier des Tanneurs de Fès est célèbre pour ses tanneries traditionnelles où les artisans travaillent le cuir de manière ancestrale.</p>
          </div>
        </div>
        {showReviews["Quartier des Tanneurs"] && (
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
            {reviews.filter(review => review.site === "Quartier des Tanneurs").map((review, index) => (
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

export default Fes;