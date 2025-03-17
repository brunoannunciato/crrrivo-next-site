import { useEffect, useRef, useState } from 'react';

import './email.scss';

const Email = ({ titleHeight, mailRef }) => {
  const [marginSize, setMarginSize] = useState(0);

  useEffect(() => {
    const mailHeight = mailRef.current.offsetHeight
    setMarginSize(titleHeight - mailHeight);

  }, [titleHeight, mailRef]);

  return (
    <div className="mail__wrapper">
      <p
        className="mail"
        ref={mailRef}
        style={{ top: `calc(15vh + ${marginSize}px + 55px)` }}
      >
        PESSOAS@
        <br />
        CRIVO.CC
      </p>
    </div>
  );
};

export default Email;
