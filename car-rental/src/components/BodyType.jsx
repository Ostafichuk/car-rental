import { Link, useParams, useLocation } from 'react-router-dom';

export default function BodyType() {
  const bodyTypes = [
    { id: 1, name: 'SUV', icon: '/suv.svg' },
    { id: 2, name: 'Hatchback', icon: '/hatchback.svg' },
    { id: 3, name: 'Wagon', icon: '/wagon.svg' },
    { id: 4, name: 'Minivan', icon: '/minivan.svg' },
    { id: 5, name: 'Sport Coupe', icon: '/sport-coupe.svg' },
    { id: 6, name: 'Compact', icon: '/compact.svg' },
    { id: 7, name: 'Coupe', icon: '/coupe.svg' },
    { id: 8, name: 'Pickup', icon: '/pickup.svg' },
    { id: 9, name: 'Sedan', icon: '/sedan.svg' },
    { id: 10, name: 'Full-size SUV', icon: '/full-size-suv.svg' },
    { id: 11, name: 'Convertible', icon: '/convertible.svg' },
    { id: 12, name: 'Crossover', icon: '/crossover.svg' },
  ];

  const { categoryName } = useParams();
  const activeCategory = categoryName || '';

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className="mt-10 mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Rent by body type</h2>

        <Link
          to="/category/all"
          className={`text-sm font-semibold transition-all flex items-center gap-2 ${
            isHomePage
              ? 'text-gray-900 hover:text-gray-600'
              : 'px-4 py-2 bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-full'
          }`}
        >
          {isHomePage ? 'View all' : 'Clear Filter ✕'}

          {isHomePage && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          )}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {bodyTypes.map((type) => {
          const isActive = activeCategory.toLowerCase() === type.name.toLowerCase();

          return (
            <Link
              key={type.id}
              to={`/category/${type.name.toLowerCase()}`}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-gray-50 border-2 border-gray-900 shadow-md'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
              }`}
            >
              <div className="h-10 flex items-center justify-center mb-3">
                <img
                  src={type.icon}
                  alt={type.name}
                  className={`h-full object-contain transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}
                />
              </div>

              <span
                className={`text-sm ${
                  isActive ? 'font-bold text-gray-900' : 'font-medium text-gray-700'
                }`}
              >
                {type.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
