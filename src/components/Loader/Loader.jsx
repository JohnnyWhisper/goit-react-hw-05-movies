import { createPortal } from 'react-dom';
import { Audio } from 'react-loader-spinner';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <Audio
      height={100}
      width={100}
      radius={9}
      color="#00BFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />,
    loaderRoot
  );
};
