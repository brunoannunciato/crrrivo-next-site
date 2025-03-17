import { useEffect, useState, useRef } from 'react';

import Image from '../Image';
import Email from './components/Email';
import Values from './components/Values';
import classNames from 'classnames';

import './content.scss';
import Stone from './components/Stone';

const Content = () => {
  const [scrolled, setScrolled] = useState(false);
  const [titleHeight, setTitleHeight] = useState(0);
  const [stickyContent, setStickyContent] = useState(false);
  const [bottomMargin, setBottomMargin] = useState(0);

  const naturalHeight = useRef(0);
  const leftTitleRef = useRef(null);
  const containerRef = useRef(null);
  const mailRef = useRef(null);
  const valuesWrapperRef = useRef(null);

  useEffect(() => {
    const title = leftTitleRef.current;
    const values = valuesWrapperRef.current;
    const windowHeight = window.outerHeight;
    const titleTotalHeight =
      windowHeight * 0.46 + leftTitleRef.current.clientHeight;

    setBottomMargin(windowHeight - titleTotalHeight);

    window.addEventListener('scroll', () => {
      const scrollOffset = window.scrollY;
      setScrolled(scrollOffset > 50);

      const titlePos = title?.clientHeight + title?.offsetTop;
      const valuesPos = values?.clientHeight + values?.offsetTop + 367;

      if (titlePos >= valuesPos && naturalHeight !== 0) {
        naturalHeight.current = valuesPos;
        setStickyContent(true);
      } else if (titlePos <= naturalHeight.current) {
        setStickyContent(false);
      }
    });

    setTitleHeight(leftTitleRef.current.offsetHeight);
  }, []);

  return (
    <div className="container">
      <div className="content__wrapper">
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
              <u>Somos um estúdio multidisciplinar de design e publicidade baseado em São Paulo.</u> Identificamos oportunidades e desenvolvemos projetos consistentes que ajudam a fortalecer marcas.
            </h2>
          </div>

          <div className="content__right" ref={containerRef}>
            <Email titleHeight={titleHeight} mailRef={mailRef} />

            <div
              className={classNames('content__values-wrapper', {})}
              ref={valuesWrapperRef}
            >
              <Values />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
