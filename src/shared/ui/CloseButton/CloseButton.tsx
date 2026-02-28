import { CloseIcon } from '../Icons';
import styles from './CloseButton.module.scss';

type CloseButtonProps = {
  onClick: () => void;
  className?: string;
  'aria-label'?: string;
};

export const CloseButton = ({
  onClick,
  className = '',
  'aria-label': ariaLabel = 'Закрыть',
}: CloseButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles.close} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <CloseIcon />
    </button>
  );
};
