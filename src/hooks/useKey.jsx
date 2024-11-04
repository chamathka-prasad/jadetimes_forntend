import { useState } from 'react';

function useKey(initialValue = null) {
  const [isKey, setIsKey] = useState(initialValue);

  function handleKey(key) {
    setIsKey((previousKey) => (previousKey === key ? null : key));
  };

  return [isKey, handleKey];
}

export default useKey;
