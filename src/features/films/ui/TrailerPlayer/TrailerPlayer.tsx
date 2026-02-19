import { useRef, useState } from 'react';
import YouTube, { type YouTubeProps } from 'react-youtube';
import styles from './TrailerPlayer.module.scss';
import { PauseIcon, PlayIcon } from '@/shared/ui/Icons';

type TrailerPlayerProps = {
  src: string;
  title: string;
};

export const TrailerPlayer = ({ src, title }: TrailerPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const playerRef = useRef<{
    pauseVideo: () => void;
    playVideo: () => void;
  } | null>(null);

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target as {
      pauseVideo: () => void;
      playVideo: () => void;
    };
  };

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    if (event.data === 2) {
      setIsPlaying(false);
    } else if (event.data === 1) {
      setIsPlaying(true);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.video}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.video__wrapper}>
        <YouTube
          videoId={src}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          opts={opts}
          onReady={onPlayerReady}
          onStateChange={onStateChange}
          className={styles.video__player}
        />

        <div className={styles.video__overlay} onClick={handleVideoClick}>
          {isHovered && (
            <div className={styles.video__bottom}>
              <h3 className={styles.video__title}>{title}</h3>
            </div>
          )}

          {isHovered && (
            <div className={styles.video__action}>
              {!isPlaying ? <PlayIcon /> : <PauseIcon />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
