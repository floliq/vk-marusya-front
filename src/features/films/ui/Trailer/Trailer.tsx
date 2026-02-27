import { useEffect } from 'react';
import styles from './Trailer.module.scss';
import { CloseButton, TrailerPlayer } from '@/shared/ui';

type TrailerProps = {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  title?: string;
};

export const Trailer = ({
  isOpen,
  onClose,
  videoId = '',
  title = 'Trailer',
}: TrailerProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.trailer} onClick={onClose}>
      <div
        className={styles.trailer__content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton onClick={onClose} className={styles.trailer__close} />
        <TrailerPlayer src={videoId} title={title} />
      </div>
    </div>
  );
};
