import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

type PrivateRoutProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRout({authorizationStatus, children}: PrivateRoutProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRout;
