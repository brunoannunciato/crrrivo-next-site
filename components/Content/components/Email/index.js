import { useEffect, useRef, useState } from 'react';

import * as S from './email.module.scss';

const Email = ({ titleHeight, mailRef }) => {
  const [marginSize, setMarginSize] = useState(0);

  useEffect(() => {
    setMarginSize(titleHeight - mailRef.current.clientHeight);
  }, [titleHeight, mailRef]);

  return (
    <div className={S.wrapper}>
      <p
        className={S.mail}
        ref={mailRef}
        style={{ top: `calc(32vh + ${marginSize}px)` }}
      >
        CONTATO@
        <br />
        CRRRIVO.CC
      </p>
    </div>
  );
};

export default Email;
