import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/cars/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Car not found');
        }
        return response.json();
      })
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження:', err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-250 mx-auto px-4 py-32 text-center grow w-full">
        <div className="text-xl font-medium text-gray-500 animate-pulse">
          Loading car details from server...
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="max-w-250 mx-auto px-4 py-32 text-center grow w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Car not found</h2>
        <p className="text-gray-500 mb-8">We couldn't find the car you're looking for.</p>
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-[#111111] text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-250 mx-auto px-4 py-32 grow w-full">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
          <img src={car.image} alt={car.name} className="w-full h-auto object-cover" />
        </div>

        <div>
          <div className="mb-2 uppercase tracking-wider text-xs font-bold text-gray-500">
            {car.category}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{car.name}</h1>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-extrabold text-gray-900">${car.price}</span>
            <span className="text-lg text-gray-500">/day</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                  Mileage
                </div>
                <div className="text-sm font-semibold text-gray-900">{car.mileage}</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                  Transmission
                </div>
                <div className="text-sm font-semibold text-gray-900">{car.transmission}</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                  Seats
                </div>
                <div className="text-sm font-semibold text-gray-900">{car.seats} Person</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">
                  Fuel
                </div>
                <div className="text-sm font-semibold text-gray-900">{car.fuel}</div>
              </div>
            </div>
          </div>

          <button className="w-full py-4 rounded-full bg-gray-900 text-white text-base font-bold shadow-lg hover:bg-black hover:shadow-xl transition-all">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
