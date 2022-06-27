import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import './header.scss';

const Header = () => {
  const [language, setLanguage] = useState('pt');

  const enClasses = classNames('header__language-selector', {
    'header__language-selector--actived': language === 'en',
  });

  const ptClasses = classNames('header__language-selector', {
    'header__language-selector--actived': language === 'pt',
  });

  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <Image
          src="/images/logo.svg"
          alt="crrrivo"
          width="272px"
          height="52px"
        />
      </div>

      <div className="header__content-wrapper">
        <a
          href="https://www.instagram.com/crrrivo/"
          target="_blank"
          rel="noreferrer"
          className="header__user"
        >
          @CRRRIVO
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
    </header>
  );
};

export default Header;
