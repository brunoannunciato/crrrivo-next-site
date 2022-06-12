import { useEffect, useRef, useState } from 'react';

import './email.scss';

const Email = ({ titleHeight }) => {
  const [marginSize, setMarginSize] = useState(0);
  const mailRef = useRef(null);

  useEffect(() => {
    setMarginSize(titleHeight - mailRef.current.clientHeight);
  }, [titleHeight]);

  return (
    <div className="mail__wrapper">
      <p
        className="mail"
        ref={mailRef}
        style={{ top: `calc(46vh + ${marginSize}px)` }}
      >
        CONTATO@
        <br />
        CRRRIVO.CC
      </p>
    </div>
  );
};

export default Email;
