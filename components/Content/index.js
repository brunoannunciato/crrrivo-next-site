import { useEffect, useState } from 'react';
import Image from 'next/image';
import Email from './components/Email';
import Values from './components/Values';
import classNames from 'classnames';

import './content.scss';

const Content = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <div className="container">
      <section className="content">
        <div
          className={classNames('content__arrow-wrapper', {
            'content__arrow-wrapper--hide': scrolled,
          })}
        >
          <Image src="/images/arrow.svg" alt="" width="56px" height="44px" />
        </div>
        <div className="content__left">
          <h2 className="content__title">
            <u>
              Somos um estúdio multidisciplinar de design baseado em São Paulo.{' '}
            </u>
            Identificamos oportunidades e desenvolvemos projetos consistentes
            que ajudam a fortalecer marcas.
          </h2>
        </div>

        <div className="content__right">
          {/* <div className="content__store-wrapper">
            <Image src="/images/Pedra_02.svg" alt="crrrivo" layout="fill" />
          </div> */}
          <div className="content__email-wrapper">
            <span className="content__fake-text">
              <u>
                Somos um estúdio multidisciplinar de design baseado em São
                Paulo.{' '}
              </u>
              Identificamos oportunidades e desenvolvemos projetos consistentes
              que ajudam a fortalecer marcas.
            </span>

            <div className="content__mail">
              <Email />
            </div>
          </div>

          <div className="content__values-wrapper">
            <Values />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
