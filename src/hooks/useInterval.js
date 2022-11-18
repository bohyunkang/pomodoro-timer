import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay === null) {
      return () => {};
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
