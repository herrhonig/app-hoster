import { useEffect, useRef, useState } from "react";

export function useFPS(updateInterval = 1000) {
  const [fps, setFPS] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    let animationFrameId: number;

    const loop = (time: number) => {
      frameCount.current += 1;

      const delta = time - lastTime.current;
      if (delta >= updateInterval) {
        const currentFPS = (frameCount.current / delta) * 1000;
        setFPS(Math.round(currentFPS));
        frameCount.current = 0;
        lastTime.current = time;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [updateInterval]);

  return fps;
}
