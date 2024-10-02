import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Props } from '../../interface/interface';

interface ModalProps extends Props {
  open: boolean; 
  className?: string; 
}

const Modal: React.FC<ModalProps> = ({ children, open, className = '' }) => {

  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (modal) {
      if (open) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [open]);

  return ReactDOM.createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
