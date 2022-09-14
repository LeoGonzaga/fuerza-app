import { useState } from 'react';

const useTextInput = () => {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const handleSetOnFocusWhenClickInput = () => {
    setOnFocus(true);
  };

  const handleRemoveOnFocusInBlur = () => {
    setOnFocus(false);
  };

  return { onFocus, handleSetOnFocusWhenClickInput, handleRemoveOnFocusInBlur };
};

export default useTextInput;
