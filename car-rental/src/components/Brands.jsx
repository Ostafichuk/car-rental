import { Link, useParams, useLocation } from 'react-router-dom';

export default function Brands() {
  // Наші дані. В реальному проєкті вони б приходили з бекенду (з бази даних)
  const brands = [
    { id: 1, name: 'Toyota', icon: '/Toyota.svg' },
    { id: 2, name: 'Ford', icon: '/Ford.svg' },
    { id: 3, name: 'Tesla', icon: '/Tesla.svg' },
    { id: 4, name: 'Volkswagen', icon: '/Volkswagen.svg' },
    { id: 5, name: 'Honda', icon: '/Honda.svg' },
    { id: 6, name: 'Nissan', icon: '/Nissan.svg' },
    { id: 7, name: 'Chevrolet', icon: '/Chevrolet.svg' },
    { id: 8, name: 'BMW', icon: '/BMW.svg' },
    { id: 9, name: 'Mercedes-Benz', icon: '/MB.svg' },
    { id: 10, name: 'Hyundai', icon: '/Hyundai.svg' },
    { id: 11, name: 'Audi', icon: '/Audi.svg' },
    { id: 12, name: 'KIA', icon: '/Kia.svg' },
  ];

  const { brandName } = useParams();
  const activeBrand = brandName || '';

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className="mt-10 mb-20">
      {/* Шапка секції */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Rent by Brands</h2>
        <Link
          to="/brand/all"
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
        {brands.map((brand) => {
          const isActive = activeBrand.toLowerCase() === brand.name.toLowerCase();

          return (
            <Link
              key={brand.id}
              to={`/brand/${brand.name.toLowerCase()}`}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-gray-50 border-2 border-gray-900 shadow-md'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
              }`}
            >
              <div className="h-12 flex items-center justify-center mb-2">
                <img
                  src={brand.icon}
                  alt={brand.name}
                  className={`h-full object-contain transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                />
              </div>
              <span
                className={`text-sm ${
                  isActive ? 'font-bold text-gray-900' : 'font-medium text-gray-700'
                }`}
              >
                {brand.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
