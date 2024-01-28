import Link from 'next/link';
import './footer.scss';
import { ReactSVG } from 'react-svg';

const Footer = ({ color = "#000", backgroundColor = "#F2F2F2" }) => {
  return (
    <footer className="footer" style={{color, backgroundColor}}>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <Link href="/">
              <ReactSVG 
                  src="/images/rrr.svg"
                  alt="(rrr)"
                  width="190px"
                  height="106px"
                  className='footer__logo'
              />
            </Link>

            <div className="footer__contact-wrapper">
              <div className="footer__section">
                <p className="footer__text">São Paulo-SP</p>

                <p className="footer__text">Brasil</p>
              </div>

              <div className="footer__section">
                <a
                  className="footer__text"
                  href="https://www.linkedin.com/company/estudiocrrrivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  className="footer__text"
                  href="https://www.instagram.com/crrrivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <p className="footer__text footer__copyright">
            copyright © 2022 crrrivo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
