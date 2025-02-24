import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { offers } from './components/card/card-mock';
import { reviews } from './components/reviews/reviews-mock';
import { AuthorizationStatus } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuthorizationStatus = AuthorizationStatus.Auth;

root.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} authorizationStatus={isAuthorizationStatus} />
  </React.StrictMode>
);
