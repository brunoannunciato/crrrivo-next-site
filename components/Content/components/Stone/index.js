import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import './stone.scss';

const Stone = ({ turnOnParallax }) => {
  return (
    <div className="stone">
      <Parallax speed={10} disabled={!turnOnParallax}>
        <div className="stone__wrapper">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 692.73 406.34"
          >
            <polygon points="0 200.72 100.36 105.26 244.78 164 376.97 17.13 472.43 0 692.73 24.48 678.05 70.99 692.73 137.08 646.23 200.72 555.66 249.68 494.46 308.43 416.13 379.41 276.6 406.34 139.53 406.34">
              <animate
                id="stoneAnim"
                begin="indefinite"
                fill="freeze"
                attributeName="points"
                dur="500ms"
                to="0 485.48 32.4 381.91 103.61 284.82 228.75 217.93 325.85 142.41 507.1 0 528.68 30.21 584.78 159.67 569.67 304.24 479.05 459.59 422.95 539.43 222.28 548.06 69.08 535.11 0 485.48"
              />
            </polygon>
          </svg>
        </div>
      </Parallax>
    </div>
  );
};

export default Stone;
