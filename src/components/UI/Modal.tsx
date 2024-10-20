import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Props } from '../../interface/interface';

interface ModalProps extends Props {
  open: boolean; 
  className?: string; 
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, className = '', onClose }) => {

  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (modal) {
      open ? modal.showModal() : modal.close()    
    }
  }, [open]);

  return ReactDOM.createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
