import { useEffect, useState, useRef } from 'react';

import Image from 'next/image';
import Email from './components/Email';
import Values from './components/Values';
import classNames from 'classnames';

import './content.scss';
import Stone from './components/Stone';

const Content = () => {
  const [scrolled, setScrolled] = useState(false);
  const [titleHeight, setTitleHeight] = useState(0);
  const leftTitleRef = useRef(null);
  const valuesRef = useRef(null);
  const containerRef = useRef(null);
  const mailRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollOffset = window.scrollY;
      setScrolled(scrollOffset > 1);
    });

    setTitleHeight(leftTitleRef.current.clientHeight);
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
          <h2 className="content__title" ref={leftTitleRef}>
            <u>
              Somos um estúdio multidisciplinar de design baseado em São Paulo.{' '}
            </u>
            Identificamos oportunidades e desenvolvemos projetos consistentes
            que ajudam a fortalecer marcas.
          </h2>
        </div>

        <div className="content__right" ref={containerRef}>
          <Email titleHeight={titleHeight} mailRef={mailRef} />

          <Stone />

          <div className="content__values-wrapper">
            <Values valuesRef={valuesRef} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
