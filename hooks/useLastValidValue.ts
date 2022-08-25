import { useEffect, useMemo, useState } from 'react';

export const useLastValidValue = <T>(
  value: T,
  isValid: (() => boolean) | boolean
) => {
  const [lastValue, setLastValue] = useState<T>(value);

  useEffect(() => {
    if (!value) return;
    setLastValue(value);
  }, [value]);

  return useMemo(() => {
    const valid = typeof isValid === 'function' ? isValid() : isValid;
    if (valid) return value;
    return lastValue;
  }, [value, lastValue, isValid]);
};
