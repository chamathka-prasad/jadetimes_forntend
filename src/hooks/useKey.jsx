import { useState } from 'react';

function useKey(initialValue) {
  const [key, setKey] = useState(initialValue);

  function handleKey(key) {
    setKey((previousKey) => (previousKey === key ? null : key));
  };

  return [key, handleKey];
}

export default useKey;
