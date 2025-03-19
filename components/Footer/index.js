import Link from 'next/link';
import Image from '../Image';
import './footer.scss';

const Footer = ({ color = "#000", backgroundColor }) => {
  return (
    <footer className="footer" style={{color, backgroundColor}}>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer__logo">
              <Link href="/">
                <Image 
                    src="/images/rrr.svg"
                    alt="(rrr)"
                    width="135px"
                    height="76px"
                    className='footer__logo'
                />
              </Link>
            </div>

            <div className="footer__contact-wrapper">
              <div className="footer__section">
                <p className="footer__text">SÃO PAULO-SP</p>

                <p className="footer__text">BRASIL</p>
              </div>

              <div className="footer__section">
                <a
                  className="footer__text"
                  href="https://www.linkedin.com/company/estudiocrivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN
                </a>
                <a
                  className="footer__text"
                  href="https://www.instagram.com/crivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>

          <p className="footer__text footer__copyright">
            COPYRIGHT © CRIVO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
