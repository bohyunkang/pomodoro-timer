import { useEffect, useState } from 'react';
import { audio } from '../assets';
import useTimerStore from './useTimerStore';

export default function useSound() {
  const [isPlaying, setIsPlaying] = useState(false);

  const timeStore = useTimerStore();
  const { order } = timeStore;

  const sound = new Audio(audio.alarm[order]);

  useEffect(() => {
    if (isPlaying) {
      sound.play();
    }

    return () => sound.pause();
  }, [isPlaying]);

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  return { play, pause };
}
