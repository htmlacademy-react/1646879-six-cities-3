import { Link } from 'react-router-dom';
import { CardProps } from '../../types';
import { useActiveOffer } from '../../utils';
import PlaceCard from '../card/card';

type FavoritesItemsProps = {
  name: string;
  offers: CardProps[];
}

function FavoritesItems({name, offers}: FavoritesItemsProps): JSX.Element | null {
  const {handleCardHover} = useActiveOffer();

  return offers.length > 0 ?
    (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>{name}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              pageType='favorites'
              handleCardHover={handleCardHover}
            />
          ))}
        </div>
      </li>
    ) : null;
}
export default FavoritesItems;
