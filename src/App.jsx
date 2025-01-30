import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Explore from './components/Explore';
import TravelForm from './components/TravelForm';
import TravelTable from './components/TravelTable';
import ConfirmationPage from './components/ConfirmationPage';
import EditForm from './components/EditForm';
import About from './components/About';
import Contact from './components/Contact';
import Casa from './components/Casa';
import Fes from './components/Fes';
import Agadir from './components/Agadir';
import Tangier from './components/Tangier';
import Dakhla from './components/Dakhla';
import Marrakech from './components/Marrakech';
import Essaouira from './components/Essaouira';

const App = () => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const updateData = (updatedData) => {
    setData(data.map(item => item.id === updatedData.id ? updatedData : item));
  };

  const deleteData = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/form" element={<TravelForm addData={addData} />} />
          <Route path="/table" element={<TravelTable data={data} deleteData={deleteData} />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/edit" element={<EditForm updateData={updateData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casa" element={<Casa />} />
          <Route path="/fes" element={<Fes />} />
          <Route path="/agadir" element={<Agadir />} />
          <Route path="/tangier" element={<Tangier />} />
          <Route path="/dakhla" element={<Dakhla />} />
          <Route path="/marrakech" element={<Marrakech />} />
          <Route path="/essaouira" element={<Essaouira />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;