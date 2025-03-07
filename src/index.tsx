import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { reviews } from './components/mock/reviews-mock';
import { AuthorizationStatus } from './const';
import { mockOffers } from './components/mock/offers-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuthorizationStatus = AuthorizationStatus.Auth;

root.render(
  <React.StrictMode>
    <App offers={mockOffers} reviews={reviews} authorizationStatus={isAuthorizationStatus} />
  </React.StrictMode>
);
