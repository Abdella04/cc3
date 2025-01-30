// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );












import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import './index.css';
import './styles.css';

AOS.init(); // Initialize AOS

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';  
// import App from './App';
// import './index.css'; 


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
