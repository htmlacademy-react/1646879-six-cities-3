const mainPageProps = {
  placeCardCount: 5
};

const offerPageProps = {
  placeCardCount: 3
};

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {
  mainPageProps,
  offerPageProps,
  AppRoute,
  AuthorizationStatus
};
