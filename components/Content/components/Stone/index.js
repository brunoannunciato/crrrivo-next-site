import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import './stone.scss';

const Stone = ({ turnOnParallax }) => {
  return (
    <div className="stone">
      <Parallax speed={-1000} disabled={!turnOnParallax}>
        <div className="stone__wrapper">
          <Image
            src="/images/Pedra_01.svg"
            alt=""
            layout="fill"
            className="services__arrow"
          />
        </div>
      </Parallax>
    </div>
  );
};

export default Stone;
