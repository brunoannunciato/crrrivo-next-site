import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';

import './header.scss';
import Link from 'next/link';

const Header = ({hideAt = false, color = "#ffffff", disableMixBlendMode}) => {
  const [language, setLanguage] = useState('pt');

  const enClasses = classNames('header__language-selector', {
    'header__language-selector--actived': language === 'en',
  });

  const ptClasses = classNames('header__language-selector', { 
    'header__language-selector--actived': language === 'pt',
  });

  const headerClass = classNames('header', {
    '--disabled': disableMixBlendMode
  })

  return (
    <header className={headerClass} style={{ color, borderColor: color }}>
      <div className="header__logo-wrapper">
        <Link href="/">
          <ReactSVG
            src='/images/logo.svg'
            className="header__logo" 
            width="300px"
            height="207px"
          />
        </Link>
      </div>

      {
        !hideAt ?
        <div className="header__content-wrapper">
        <a
          href="https://www.instagram.com/crivo/"
          target="_blank"
          rel="noreferrer"
          className="header__user"
        >
          @CRIVO
        </a>

        <div className="header__language-switcher">
          <button onClick={() => setLanguage('pt')} className={ptClasses}>
            PT
          </button>

          <button onClick={() => setLanguage('en')} className={enClasses}>
            EN
          </button>
        </div>
      </div>
      : null

      }
      
    </header>
  );
};

export default Header;
