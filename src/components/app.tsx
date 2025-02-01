import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main-screen';
import LoginScreen from '../pages/login-screen';
import FavoritesScreen from '../pages/favorites-screen';
import OfferScreen from '../pages/offer-screen';
import Page404 from '../pages/page404';
import PrivateRout from './private-route';
import { mainPageProps, offerPageProps } from '../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainScreen placeCardCount={mainPageProps.placeCardCount}/>} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRout authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen />
              </PrivateRout>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen placeCardCount={offerPageProps.placeCardCount}/>} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
