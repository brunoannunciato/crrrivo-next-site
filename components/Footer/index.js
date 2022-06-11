import Image from 'next/image';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <Image
              src="/images/rrr.svg"
              alt="(rrr)"
              width="190px"
              height="106px"
            />

            <div className="footer__contact-wrapper">
              <div className="footer__section">
                <p className="footer__text">São Paulo-SP</p>

                <p className="footer__text">Brasil</p>
              </div>

              <div className="footer__section">
                <a className="footer__text">Linkedin</a>
                <a className="footer__text">Instagram</a>
              </div>
            </div>
          </div>

          <p className="footer__text">copyright © 2022 crrrivo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;