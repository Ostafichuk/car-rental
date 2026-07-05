import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Cars');

  const filters = ['All Cars', 'Sedan', 'SUV', 'Coupe', 'Wagon'];

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error('Помилка завантаження:', err));
  }, []);

  const filteredCars =
    activeFilter === 'All Cars'
      ? cars
      : cars.filter((car) => car.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="max-w-300 mx-auto px-8 py-8 grow w-full bg-[#FAFAFA]">
      {/* Кнопка повернення */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 mt-24 mb-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm w-max"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Home
      </Link>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Full Car Catalog</h1>
        <p className="text-gray-500">Find the perfect vehicle for your next adventure.</p>
      </div>

      {/* Фільтри */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-7 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Сітка результатів */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500 font-medium bg-white rounded-3xl border border-dashed border-gray-300 mb-20">
          No cars found in this category.
        </div>
      )}
    </div>
  );
}
