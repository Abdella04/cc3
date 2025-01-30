import React, { useState, useEffect } from 'react';
import './Casa.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hassan2 from '../components/hassan2.jpg'; // Adjust path as needed
import ancienne from '../components/ancienne.jpg'; // Adjust path as needed
import kcornich from '../components/kcornich.png'; // Adjust path as needed

const reviews = [
  {
    name: "John Doe",
    review: "Ville incroyable avec une riche histoire et une belle architecture!",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Mosquée Hassan II",
  },
  {
    name: "Jane Smith",
    review: "J'ai passé un merveilleux moment à explorer les marchés et à profiter de la cuisine locale.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Mosquée Hassan II",
  },
  {
    name: "Ahmed Ali",
    review: "La mosquée Hassan II est à couper le souffle, mais la circulation en ville peut être accablante.",
    rating: 3,
    photo: "path/to/ahmed.jpg",
    site: "Mosquée Hassan II",
  },
  {
    name: "Marie Dupont",
    review: "L'Ancienne Médina est un endroit fascinant avec beaucoup de charme et d'histoire.",
    rating: 5,
    photo: "path/to/marie.jpg",
    site: "Ancienne Médina",
  },
  {
    name: "Pierre Martin",
    review: "J'ai adoré me perdre dans les ruelles étroites et découvrir les trésors cachés.",
    rating: 4,
    photo: "path/to/pierre.jpg",
    site: "Ancienne Médina",
  },
  {
    name: "Fatima Zahra",
    review: "La Corniche est magnifique, surtout au coucher du soleil. Un endroit parfait pour se détendre.",
    rating: 5,
    photo: "path/to/fatima.jpg",
    site: "La Corniche",
  },
  {
    name: "Omar El",
    review: "Les restaurants le long de la Corniche offrent une vue imprenable sur l'océan.",
    rating: 4,
    photo: "path/to/omar.jpg",
    site: "La Corniche",
  },
];

const Casa = () => {
  const [showReviews, setShowReviews] = useState({
    "Mosquée Hassan II": false,
    "Ancienne Médina": false,
    "La Corniche": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="casa-container">
      <h1 className="casa-title">Bienvenue à Casablanca</h1>
      
      <section className="casa-section" data-aos="fade-up">
        <div className="casa-image-container" onClick={() => handleImageClick("Mosquée Hassan II")}>
          <img src={hassan2} alt="Mosquée Hassan II" className="casa-image" />
          <div className="casa-info-hover">
            <h2>Mosquée Hassan II</h2>
            <p>L'énorme mosquée Hassan II, achevée en 1993, possède un minaret de 210 m surmonté de lasers dirigés vers La Mecque.</p>
          </div>
        </div>
        {showReviews["Mosquée Hassan II"] && (
          <section className="casa-reviews" data-aos="fade-up">
            <div className="average-rating">
              <h3>Note Moyenne: 4.2</h3>
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star inactive">★</span>
              </div>
            </div>

            <h2>Avis</h2>
            {reviews.filter(review => review.site === "Mosquée Hassan II").map((review, index) => (
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

      <section className="casa-section" data-aos="fade-up">
        <div className="casa-image-container" onClick={() => handleImageClick("Ancienne Médina")}>
          <img src={ancienne} alt="Ancienne Médina" className="casa-image" />
          <div className="casa-info-hover">
            <h2>Ancienne Médina</h2>
            <p>L'Ancienne Médina de Casablanca, cœur historique de la ville, est un dédale de ruelles étroites et de bâtisses traditionnelles, reflétant l'authenticité et le patrimoine culturel marocain.</p>
          </div>
        </div>
        {showReviews["Ancienne Médina"] && (
          <section className="casa-reviews" data-aos="fade-up">
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
            {reviews.filter(review => review.site === "Ancienne Médina").map((review, index) => (
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

      <section className="casa-section" data-aos="fade-up">
        <div className="casa-image-container" onClick={() => handleImageClick("La Corniche")}>
          <img src={kcornich} alt="La Corniche" className="casa-image" />
          <div className="casa-info-hover">
            <h2>La Corniche</h2>
            <p>La Corniche de Casablanca est un boulevard pittoresque en bord de mer le long de la côte atlantique, réputé pour sa vie nocturne animée, ses restaurants haut de gamme et ses vues panoramiques.</p>
          </div>
        </div>
        {showReviews["La Corniche"] && (
          <section className="casa-reviews" data-aos="fade-up">
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
            {reviews.filter(review => review.site === "La Corniche").map((review, index) => (
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

export default Casa;