import Image from 'next/image';
import isClient from '../../utils/isClient';

import './services.scss';

const Services = () => {
  const isMobile = isClient() && window.outerWidth < 768;

  const servicesList = [
    'Branding',
    'Digital',
    'Estratégia',
    'Websites',
    'Identidade',
    'Direção de arte',
    'Impressos',
    'Motion',
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services__title">
          Oferecemos serviços de construção de marcas e sistemas de identidade
          com foco em digital.
        </h2>

        <ul className="services__list">
          {servicesList.map((item) => {
            return (
              <li key={item} className="services__item">
                <div className="services__icon">
                  <Image
                    src="/images/arrow.svg"
                    alt=""
                    width={isMobile ? '28px' : '56px'}
                    height={isMobile ? '14px' : '44px'}
                    className="services__arrow"
                  />
                </div>
                <h3 className="services__item-name">{item}</h3>
              </li>
            );
          })}
        </ul>

        <p className="services__contact-text">
          Fale com a gente. <br />
          contato@crrrivo.cc
        </p>
      </div>
    </section>
  );
};

export default Services;
