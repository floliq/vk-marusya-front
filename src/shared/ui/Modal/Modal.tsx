import { CloseIcon } from '../Icons/Auth/CloseIcon';
import styles from './Modal.module.scss';

import type { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={styles.modal__close} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};
