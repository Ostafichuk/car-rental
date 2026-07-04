import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BodyType from '../components/BodyType';
import CarCard from '../components/CarCard';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/cars')
      .then((response) => response.json())
      .then((data) => {
        if (categoryName.toLowerCase() === 'all') {
          setCars(data);
        } else {
          const filtered = data.filter(
            (car) => car.category.toLowerCase() === categoryName.toLowerCase()
          );
          setCars(filtered);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження:', error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="max-w-250 mx-auto px-4 py-8 grow w-full">
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

      <BodyType />

      <div className="-mt-12">
        {loading ? (
          <div className="text-center py-12 text-gray-500 font-medium animate-pulse">
            Loading cars...
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-16 text-gray-500 font-medium border border-dashed border-gray-300 bg-gray-50 rounded-3xl">
            No cars found for category:{' '}
            <span className="font-bold text-gray-900 uppercase">{categoryName}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
