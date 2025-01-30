import React, { useState, useEffect } from 'react';
import './Essaouira.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for the sites
import skala from '../components/skala.jpg'; // Adjust path as needed
import medina from '../components/medinaa.jpg'; // Adjust path as needed
import beach from '../components/beach.jpg'; // Adjust path as needed

// Placeholder for reviews
const reviews = [
  {
    name: "John Doe",
    review: "La Skala de la Kasbah offre une vue imprenable sur l'océan et les remparts de la ville.",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Skala de la Kasbah",
  },
  {
    name: "Jane Smith",
    review: "La Médina d'Essaouira est un labyrinthe fascinant de ruelles étroites et de maisons blanches et bleues.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Médina d'Essaouira",
  },
  {
    name: "Ahmed Ali",
    review: "La plage d'Essaouira est parfaite pour se détendre et profiter des sports nautiques.",
    rating: 5,
    photo: "path/to/ahmed.jpg",
    site: "Plage d'Essaouira",
  },
  {
    name: "Marie Dupont",
    review: "J'ai adoré me promener sur les remparts de la Skala et admirer le coucher du soleil.",
    rating: 5,
    photo: "path/to/marie.jpg",
    site: "Skala de la Kasbah",
  },
  {
    name: "Pierre Martin",
    review: "La Médina d'Essaouira est un lieu de charme avec ses boutiques artisanales et ses cafés accueillants.",
    rating: 4,
    photo: "path/to/pierre.jpg",
    site: "Médina d'Essaouira",
  },
];

const Essaouira = () => {
  const [showReviews, setShowReviews] = useState({
    "Skala de la Kasbah": false,
    "Médina d'Essaouira": false,
    "Plage d'Essaouira": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="city-container">
      <h1 className="city-title">Bienvenue à Essaouira</h1>
      
      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Skala de la Kasbah")}>
          <img src={skala} alt="Skala de la Kasbah" className="city-image" />
          <div className="city-info-hover">
            <h2>Skala de la Kasbah</h2>
            <p>La Skala de la Kasbah est une fortification historique offrant des vues spectaculaires sur l'océan Atlantique et les remparts de la ville.</p>
          </div>
        </div>
        {showReviews["Skala de la Kasbah"] && (
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
            {reviews.filter(review => review.site === "Skala de la Kasbah").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Médina d'Essaouira")}>
          <img src={medina} alt="Médina d'Essaouira" className="city-image" />
          <div className="city-info-hover">
            <h2>Médina d'Essaouira</h2>
            <p>La Médina d'Essaouira est un site du patrimoine mondial de l'UNESCO, connu pour ses ruelles pittoresques et ses bâtiments blanchis à la chaux.</p>
          </div>
        </div>
        {showReviews["Médina d'Essaouira"] && (
          <section className="city-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.6</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Médina d'Essaouira").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Plage d'Essaouira")}>
          <img src={beach} alt="Plage d'Essaouira" className="city-image" />
          <div className="city-info-hover">
            <h2>Plage d'Essaouira</h2>
            <p>La plage d'Essaouira est une vaste étendue de sable doré, idéale pour la détente et les sports nautiques comme le kitesurf et la planche à voile.</p>
          </div>
        </div>
        {showReviews["Plage d'Essaouira"] && (
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
            {reviews.filter(review => review.site === "Plage d'Essaouira").map((review, index) => (
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

export default Essaouira;