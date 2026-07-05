import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import CategoryPage from './pages/CategoryPage';
import BrandPage from './pages/BrandPage';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f9fa] font-sans flex flex-col relative">
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        <div className="grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/brand/:brandName" element={<BrandPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
