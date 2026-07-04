import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import Brands from '../components/Brands';
import BodyType from '../components/BodyType';
import CarCollection from '../components/CarCollection';
import HowItWorks from '../components/HowItWorks';
import mainBg from '../assets/mainBg.png';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка:', error);
        setLoading(false);
      });
  }, []);

  const filteredCars =
    activeCategory === 'All'
      ? cars
      : cars.filter((car) => car.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <div
        className="w-full bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <Hero />
      </div>

      <div className="max-w-250 mx-auto px-4 relative z-10 grow w-full">
        <div className="-mt-16">
          <SearchFilter />
        </div>

        <Brands />

        <BodyType activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <CarCollection cars={filteredCars} loading={loading} />

        <HowItWorks />
      </div>
    </>
  );
}
