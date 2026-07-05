import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';

export default function CarCollection() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error('Помилка завантаження авто:', err));
  }, []);

  return (
    <section className="max-w-300 mx-auto px-4 py-16 bg-[#FAFAFA]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight">
          Our Impressive Collection of Cars
        </h2>
        <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
          Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our
          customers with the ultimate driving experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cars.slice(0, 6).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-full text-[15px] font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
        >
          See all Cars
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
