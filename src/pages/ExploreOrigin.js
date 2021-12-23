import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealRecipeCard from '../components/MealRecipeCard';

function ExploreOrigin() {
  const [originSelected, setOriginSelected] = useState('All');
  const [filterOrigin, setFilterOrigin] = useState([]);
  const [originList, setOriginList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (originSelected === 'All') {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setFilterOrigin(data.meals);
      } else {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${originSelected}`);
        const data = await response.json();
        setFilterOrigin(data.meals);
      }
    };
    fetchData();
  }, [originSelected]);
  useEffect(() => {
    const fetchAreas = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = await response.json();
      setOriginList(data.meals);
    };
    fetchAreas();
  }, []);

  const MAX_LENGTH = 12;
  return (
    <div className="body-background">
      <Header title="Explorar Origem" showButton />
      <div className="explore-origin">
        <select
          className="explore-by-area-dropdown"
          data-testid="explore-by-area-dropdown"
          onChange={ (event) => setOriginSelected(event.target.value) }
        >
          <option
            value="All"
            data-testid="All-option"
          >
            All
          </option>
          {originList.map((origin) => (
            <option
              data-testid={ `${origin.strArea}-option` }
              key={ origin.strArea }
              value={ origin.strArea }
            >
              {origin.strArea}
            </option>
          ))}
        </select>
        <section className="recipes-list">
          {filterOrigin.map((meal, index) => {
            if (index < MAX_LENGTH) {
              return (
                <MealRecipeCard key={ meal.idMeal } recipe={ meal } index={ index } />
              );
            }
            return null;
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreOrigin;
