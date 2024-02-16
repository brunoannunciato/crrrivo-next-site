import { useEffect, useRef, useState } from 'react';

import './email.scss';

const Email = ({ titleHeight, mailRef }) => {
  const [marginSize, setMarginSize] = useState(0);

  useEffect(() => {
    setMarginSize(titleHeight - mailRef.current.clientHeight);
  }, [titleHeight, mailRef]);

  return (
    <div className="mail__wrapper">
      <p
        className="mail"
        ref={mailRef}
        style={{ top: `${marginSize}px` }}
      >
        CONTATO@
        <br />
        CRRRIVO.CC
      </p>
    </div>
  );
};

export default Email;
