import FavoritesItems from '../components/favorites/favorites-items';
import Header from '../components/header/header';
import { CITIES } from '../const';
import { CardProps } from '../types';

type FavoritesScreenProps = {
  offers: CardProps[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const filteredOffers = CITIES.map((city) => ({
    name: city,
    favorites: offers.filter((offer) => offer.city.name === city)
  }));

  return (
    <div className="page page--favorites">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                filteredOffers.map((item, index) => {
                  const key = index;

                  return (
                    <FavoritesItems
                      name={item.name}
                      offers={item.favorites}
                      key={key}
                    />
                  );
                })
              }
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
