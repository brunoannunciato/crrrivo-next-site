import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import './stone.scss';

const Stone = ({ stoneRef, wrapperRef, turnOnParallax }) => {
  return (
    <div className="stone-wrapper" ref={wrapperRef}>
      <div className="stone" ref={stoneRef}>
        <Parallax speed={-300} disabled={!turnOnParallax}>
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
    </div>
  );
};

export default Stone;
