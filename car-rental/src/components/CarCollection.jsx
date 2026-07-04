import CarCard from './CarCard';

export default function CarCollection({ cars, loading }) {
  return (
    <section className="py-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Recommended Cars</h2>
        <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          View All
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500 font-medium animate-pulse">
          Loading cars from server...
        </div>
      ) : cars.length === 0 ? (
        <div className="text-center py-12 text-gray-500 font-medium border-2 border-dashed border-gray-200 rounded-3xl">
          No cars found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}
