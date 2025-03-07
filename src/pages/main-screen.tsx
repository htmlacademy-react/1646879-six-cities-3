import { useState } from 'react';
import PlaceCard from '../components/card/card';
import Header from '../components/header/header';
import Locations from '../components/locations/locations';
import { CardProps, CityType } from '../types';
import { useActiveOffer } from '../utils';
import Map from '../components/map/map';
import { cityLocationDefault } from '../const';

type MainScreenProps = {
  offers: CardProps[];
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const {activeOffer, handleCardHover} = useActiveOffer();
  const [currentCity, setCurrentCity] = useState({city: 'Amsterdam'});

  const handleOffersFilter = (city: string) => {
    setCurrentCity({city: city});
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity.city);

  const locationCity: CityType = filteredOffers.length > 0 ? filteredOffers[0].city : cityLocationDefault[currentCity.city];

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations handleOffersFilter ={handleOffersFilter}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${filteredOffers.length} places to stay in ${currentCity.city}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {filteredOffers.map((offer) => (
                  <PlaceCard
                    key={offer.id}
                    offer={offer}
                    pageType='main'
                    handleCardHover={handleCardHover}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={locationCity} offers={filteredOffers} activeOffer={activeOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
