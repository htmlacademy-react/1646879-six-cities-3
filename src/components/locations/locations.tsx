import { NavLink } from 'react-router-dom';
import { CITIES } from '../../const';
import { useState } from 'react';

type LocationsProps = {
  handleOffersFilter: (city: string) => void;
}

function Locations({handleOffersFilter}: LocationsProps): JSX.Element {
  const [activeCity, setActiveCity] = useState({city: 'Amsterdam'});

  const getOffersActive = (city: string) => {
    setActiveCity({city: city});
    handleOffersFilter(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <NavLink
                className={`locations__item-link tabs__item ${activeCity.city === city ? 'tabs__item--active' : ''}`} to="#"
                onClick={() => getOffersActive(city)}
              >
                <span>{city}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Locations;
