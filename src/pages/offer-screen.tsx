import { useParams } from 'react-router-dom';
import PlaceCard from '../components/card/card';
import Header from '../components/header/header';
import { CardProps, ReviewProps } from '../types';
import { getRatingPercentage } from '../utils';
import Page404 from './page404';
import { useActiveOffer } from '../utils';
import Reviews from '../components/reviews/reviews';
import { AuthorizationStatus } from '../const';

type OfferScreenProps = {
  offers: CardProps[];
  reviews: ReviewProps[];
  authorizationStatus: AuthorizationStatus;
};

function OfferScreen({offers, reviews, authorizationStatus}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const {handleCardHover} = useActiveOffer();
  const currentOffer: CardProps | undefined = offers.find((offer: CardProps) => offer.id === id);

  if (!currentOffer) {
    return <Page404 type='offer' />;
  }

  const {type, bedrooms, maxAdults, goods, images, isPremium, title, rating, price, host, description} = currentOffer;

  return (
    <div>
      <Header />

      <main className="page__main page__main--property">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.map((img, index) => {
                  const key = index;
                  return (
                    <div className="offer__image-wrapper" key={key}>
                      <img className="offer__image" src={img} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium ?
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div> : ''
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRatingPercentage(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  {
                    maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`
                  }
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((good, index) => {
                      const key = index;
                      return (
                        <li className="offer__inside-item" key={key}>
                          {good}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro ? <span className="offer__user-status">Pro</span> : ''
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <Reviews
                  reviews={reviews}
                  isAuth={authorizationStatus === AuthorizationStatus.Auth}
                />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.map((offer) => (
                <PlaceCard
                  key={offer.id}
                  offer={offer}
                  pageType='offer'
                  handleCardHover={handleCardHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
