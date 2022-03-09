import { useState, useEffect } from 'react';

const useCount = (startNumber) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (startNumber) setCount(startNumber);
  }, []);

  const handleDoubleCount = () => {
    setCount(count * 2);
  };
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  return {
    handleDoubleCount,
    handleIncreaseCount,
    count,
  };
};

export default useCount;
