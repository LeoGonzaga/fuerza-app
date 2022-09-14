export const checkEmptyInputs = (value: string) => {
  const clean_value = value.trim();
  return clean_value?.length === 0;
};

export const checkInputLenght = (value: string) => {
  return value.length < 6;
};
