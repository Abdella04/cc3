import React, { useState, useEffect } from 'react';
import './Marrakech.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for the sites
import jemaaElFna from '../components/jemaaElFna.jpg'; // Adjust path as needed
import koutoubia from '../components/koutoubia.jpg'; // Adjust path as needed
import majorelleGarden from '../components/majorelleGarden.jpg'; // Adjust path as needed

// Placeholder for reviews
const reviews = [
  {
    name: "John Doe",
    review: "La place Jemaa el-Fna est un endroit vibrant et plein de vie, avec des spectacles de rue et des marchés incroyables.",
    rating: 5,
    photo: "path/to/john.jpg",
    site: "Jemaa el-Fna",
  },
  {
    name: "Jane Smith",
    review: "La mosquée Koutoubia est un chef-d'œuvre architectural et un symbole emblématique de Marrakech.",
    rating: 4,
    photo: "path/to/jane.jpg",
    site: "Mosquée Koutoubia",
  },
  {
    name: "Ahmed Ali",
    review: "Le Jardin Majorelle est un havre de paix avec des plantes exotiques et une magnifique villa bleue.",
    rating: 5,
    photo: "path/to/ahmed.jpg",
    site: "Jardin Majorelle",
  },
  {
    name: "Marie Dupont",
    review: "J'ai adoré explorer les souks autour de Jemaa el-Fna et découvrir des trésors cachés.",
    rating: 5,
    photo: "path/to/marie.jpg",
    site: "Jemaa el-Fna",
  },
  {
    name: "Pierre Martin",
    review: "Le Jardin Majorelle est un endroit incontournable pour tous les amoureux de la nature et de l'art.",
    rating: 4,
    photo: "path/to/pierre.jpg",
    site: "Jardin Majorelle",
  },
];

const Marrakech = () => {
  const [showReviews, setShowReviews] = useState({
    "Jemaa el-Fna": false,
    "Mosquée Koutoubia": false,
    "Jardin Majorelle": false,
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleImageClick = (site) => {
    setShowReviews((prev) => ({ ...prev, [site]: !prev[site] }));
  };

  return (
    <div className="city-container">
      <h1 className="city-title">Bienvenue à Marrakech</h1>
      
      <section className="city-section" data-aos="fade-up">
        <div className="city-image-container" onClick={() => handleImageClick("Jemaa el-Fna")}>
          <img src={jemaaElFna} alt="Jemaa el-Fna" className="city-image" />
          <div className="city-info-hover">
            <h2>Jemaa el-Fna</h2>
            <p>La place Jemaa el-Fna est le cœur battant de Marrakech, célèbre pour ses spectacles de rue, ses marchands et ses stands de nourriture.</p>
          </div>
        </div>
        {showReviews["Jemaa el-Fna"] && (
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
            {reviews.filter(review => review.site === "Jemaa el-Fna").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Mosquée Koutoubia")}>
          <img src={koutoubia} alt="Mosquée Koutoubia" className="city-image" />
          <div className="city-info-hover">
            <h2>Mosquée Koutoubia</h2>
            <p>La mosquée Koutoubia, construite au XIIe siècle, est un monument emblématique de Marrakech avec son minaret majestueux.</p>
          </div>
        </div>
        {showReviews["Mosquée Koutoubia"] && (
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
            {reviews.filter(review => review.site === "Mosquée Koutoubia").map((review, index) => (
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
        <div className="city-image-container" onClick={() => handleImageClick("Jardin Majorelle")}>
          <img src={majorelleGarden} alt="Jardin Majorelle" className="city-image" />
          <div className="city-info-hover">
            <h2>Jardin Majorelle</h2>
            <p>Le Jardin Majorelle est un magnifique jardin botanique avec une villa bleue emblématique, autrefois propriété d'Yves Saint Laurent.</p>
          </div>
        </div>
        {showReviews["Jardin Majorelle"] && (
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
            {reviews.filter(review => review.site === "Jardin Majorelle").map((review, index) => (
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

export default Marrakech;