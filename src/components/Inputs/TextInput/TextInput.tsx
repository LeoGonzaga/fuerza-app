import React, { ChangeEvent } from 'react';
import { Styles } from './styles';
import useTextInput from './useTextInput';

type TextInputProps = {
  value?: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  onChange,
  placeholder,
  value,
  type = 'text',
  error,
}: TextInputProps): JSX.Element => {
  const { handleSetOnFocusWhenClickInput, handleRemoveOnFocusInBlur, onFocus } =
    useTextInput();

  return (
    <Styles.Container onClick={handleSetOnFocusWhenClickInput} focus={onFocus}>
      {onFocus && <label>{placeholder}</label>}
      <input
        type={type}
        value={value}
        autoFocus
        placeholder={placeholder}
        onBlur={handleRemoveOnFocusInBlur}
        onChange={onChange}
      />
      {error && <span>This field cannot be empty</span>}
    </Styles.Container>
  );
};
