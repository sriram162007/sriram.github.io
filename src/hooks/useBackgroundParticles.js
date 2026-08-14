import { useMemo } from 'react';

export function useBackgroundParticles(count = 12) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    [count]
  );
}
