import { forwardRef } from 'react';

const MyInput =forwardRef((props, ref) => {
    return <input ref={ref} />;
  });

export default MyInput;