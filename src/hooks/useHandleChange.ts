import { FormEvent, useState } from 'react';

export default function useHandleChange(initValue: string = '') {
  const [value, setValue] = useState<string>(initValue);

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return {
    value,
    handleChange,
  };
}