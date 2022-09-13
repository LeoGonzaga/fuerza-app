import React, { ChangeEvent } from 'react';
import { Styles } from './styles';
import useTextInput from './useTextInput';

type TextInputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  onChange,
  placeholder,
  value,
}: TextInputProps): JSX.Element => {
  const { handleSetOnFocusWhenClickInput, handleRemoveOnFocusInBlur, onFocus } =
    useTextInput();

  return (
    <Styles.Container onClick={handleSetOnFocusWhenClickInput} focus={onFocus}>
      {onFocus && <label>{placeholder}</label>}
      <input
        type="text"
        value={value}
        autoFocus
        placeholder={placeholder}
        onBlur={handleRemoveOnFocusInBlur}
        onChange={onChange}
      />
    </Styles.Container>
  );
};
