import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

const variants = {
  page: {text: 'The page does not exist'},
  offer: {text: 'Offer with this ID does not exist'}
} as const;

type PageType = {
  type: keyof typeof variants;
}

function Page404 ({type}: PageType): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <section className="error" style={{position: 'absolute', top: '20%', left: '8rem'}}>
            <h1 className="error__title"
              style={
                {
                  marginTop: '0',
                  marginBottom: '7px',
                  padding: '0 28px',
                  fontSize: '348px',
                  lineHeight: '1.21053',
                  fontWeight: '700',
                  fontStyle: 'oblique',
                  textAlign: 'center',
                  color: '#ff9000'
                }
              }
            >404
            </h1>
            <p className="error__text">{variants[type].text}</p>
            <Link
              style={
                {
                  padding: '16px 20px 13px',
                  color: '#fff',
                  backgroundColor: '#4481c3',
                  borderRadius: '3px',
                  border: 'none',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  display: 'inline-block',
                  font: 'inherit',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  WebkitTransition: 'color 0.3s, background-color 0.3s',
                  transition: 'color 0.3s, background-color 0.3s',
                  outline: 0,
                }
              }
              to={AppRoute.Main}
            >
              <span>Forward to the main page</span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;
