import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
      <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gray-100">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{car.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-gray-900">{car.price}</span>
          <span className="text-sm text-gray-500">/day</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 bg-gray-50 rounded-2xl p-3 mb-6">
        <div className="flex flex-col items-center justify-center gap-1">
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
          <span className="text-[10px] text-gray-600 font-medium">{car.mileage}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
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
          <span className="text-[10px] text-gray-600 font-medium">{car.transmission}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="text-[10px] text-gray-600 font-medium">{car.seats} Person</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
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
          <span className="text-[10px] text-gray-600 font-medium">{car.fuel}</span>
        </div>
      </div>

      <Link
        to={`/car/${car.id}`}
        className="mt-auto w-full py-3 rounded-full border border-gray-900 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-center block"
      >
        Rent Now
      </Link>
    </div>
  );
}
