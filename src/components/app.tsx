import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main-screen';
import LoginScreen from '../pages/login-screen';
import FavoritesScreen from '../pages/favorites-screen';
import OfferScreen from '../pages/offer-screen';
import Page404 from '../pages/page404';
import PrivateRout from './private-route';
import { CardProps, ReviewProps } from '../types';

type AppProps = {
  offers: CardProps[];
  reviews: ReviewProps[];
  authorizationStatus: AuthorizationStatus;
};

function App({offers, reviews, authorizationStatus}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainScreen offers={offers}/>} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRout authorizationStatus={authorizationStatus}>
                <FavoritesScreen offers={offers} />
              </PrivateRout>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferScreen
                offers={offers}
                reviews={reviews}
                authorizationStatus={authorizationStatus}
              />
            }
          />
        </Route>
        <Route path='*' element={<Page404 type='page' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
