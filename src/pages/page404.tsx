import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

function Page404 (): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <section className="error">
            <h1 className="error__title">Ошибка 404</h1>
            <p className="error__text">Страница не существует</p>
            <Link
              className="error__link"
              to={AppRoute.Main}
            >
              <span>Вернуться на главную страницу</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;
