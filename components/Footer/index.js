import Image from 'next/image';

import * as S from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.container}>
        <div className={S.wrapper}>
          <div className={S.content}>
            <Image
              src="/images/rrr.svg"
              alt="(rrr)"
              width="190px"
              height="106px"
            />

            <div className={S.contact-wrapper}>
              <div className={S.section}>
                <p className={S.text}>São Paulo-SP</p>

                <p className={S.text}>Brasil</p>
              </div>

              <div className={S.section}>
                <a
                  className={S.text}
                  href="https://www.linkedin.com/company/estudiocrrrivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  className={S.text}
                  href="https://www.instagram.com/crrrivo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <p className={`${S.text} ${S.copyright}`}>
            copyright © 2022 crrrivo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
