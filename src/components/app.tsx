import MainScreen from '../pages/main-screen';
import { mainPageProps } from '../const';

function App(): JSX.Element {
  return (
    <MainScreen placeCardCount={mainPageProps.placeCardCount}/>
  );
}

export default App;
