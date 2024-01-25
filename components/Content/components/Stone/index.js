import * as S from './stone.module.scss';

const Stone = ({ turnOnParallax }) => {
  return (
    <div className={S.stone}>
      <div className={S.wrapper}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <polygon
            fill="currentColor"
            points="0 329.14 287.77 267.98 539.57 239.21 935.24 303.96 1000 397.48 978.42 624.11 877.69 760.79 514.39 728.41 392.09 760.79 226.61 710.43 190.65 577.33 21.59 480.22 0 329.14"
          />
        </svg>
      </div>
    </div>
  );
};

export default Stone;
