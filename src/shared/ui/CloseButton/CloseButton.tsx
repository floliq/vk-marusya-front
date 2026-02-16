import { CloseIcon } from '../Icons';
import styles from './CloseButton.module.scss';

type CloseButtonProps = {
  onClick: () => void;
  className?: string;
};

export const CloseButton = ({ onClick, className = '' }: CloseButtonProps) => {
  return (
    <button className={`${styles.close} ${className}`} onClick={onClick}>
      <CloseIcon />
    </button>
  );
};
