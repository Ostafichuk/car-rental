import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  const features = {
    mileage: '4,000',
    transmission: 'Auto',
    seats: '4 Person',
    fuel: 'Electric',
  };

  const handleImageError = (e) => {
    e.target.src =
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=600';
  };

  return (
    <div className="bg-white rounded-3xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-transparent hover:border-gray-900 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="w-full aspect-4/3 bg-gray-100 rounded-2xl mb-5 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <h3 className="text-[18px] font-bold text-gray-900 mb-1 line-clamp-1">{car.name}</h3>

      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-[28px] font-extrabold text-gray-900">{car.price}</span>
        <span className="text-[14px] font-medium text-gray-500">/day</span>
      </div>

      <div className="flex justify-between items-center bg-[#F7F7F9] rounded-2xl py-4 px-4 mb-6 mt-auto">
        <div className="flex flex-col items-center gap-1.5">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-[11px] text-gray-500 font-semibold">{features.mileage}</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
          <span className="text-[11px] text-gray-500 font-semibold">{features.transmission}</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          <span className="text-[11px] text-gray-500 font-semibold">{features.seats}</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <span className="text-[11px] text-gray-500 font-semibold">{features.fuel}</span>
        </div>
      </div>

      <Link
        to={`/car/${car.id}`}
        className="w-full py-3.5 flex justify-center rounded-full border border-gray-300 text-[14px] text-gray-900 font-bold group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all duration-300"
      >
        Rent Now
      </Link>
    </div>
  );
}
