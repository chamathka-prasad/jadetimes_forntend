import { useState } from 'react';

function useKey() {
  const [key, setKey] = useState(null);

  function handleKey(key) {
    setKey((previousKey) => (previousKey === key ? null : key));
  };

  return [key, handleKey];
}

export default useKey;
