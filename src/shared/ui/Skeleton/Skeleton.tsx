import styles from './Skeleton.module.scss';

type SkeletonProps = {
  height?: number;
};

export const Skeleton = ({ height }: SkeletonProps) => {
  return (
    <div
      className={styles.skeleton}
      style={{ height: height ? `${height}px` : '100%' }}
    />
  );
};
