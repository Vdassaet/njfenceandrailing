import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ServicesPage from './pages/Services';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
