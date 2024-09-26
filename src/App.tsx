import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import HomePage from './pages/Home/HomePage';
// import AboutPage from './pages/About/AboutPage';
// import RoomsPage from './pages/Rooms/RoomsPage';
// import ContactPage from './pages/Contact/ContactPage';
import ErrorPage from './pages/Error/ErrorPage';
import LoadingSpinner from './components/Common/LoadingSpinner'; // Spinner component

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // To detect page changes

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after a short delay
    }, 400); // Simulate a 500ms loading time for smoother transitions
    return () => clearTimeout(timer); // Clear timeout when component unmounts
  }, [location]); // Trigger loading on location change

  return (
    <div className="App">
      {loading && <LoadingSpinner />} {/* Show spinner during loading */}
      {!loading && (
        <>
          <Header /> {/* Always display header */}
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Home Page */}

            <Route path="*" element={<ErrorPage />} /> {/* Fallback 404 Page */}
          </Routes>
          <Footer /> {/* Always display footer */}
        </>
      )}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
