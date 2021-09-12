import { FC, memo, ChangeEventHandler } from 'react';
import css from './Auth.module.scss';

type InputProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>,
  value?: string,
  label?: string,
};

const Input: FC<InputProps> = ({ value, onChange, label }) => {
  return (
    <div className={css.inputGroup}>
      {label && (<label>{label}</label>)}
      <input value={value} onChange={onChange} />
    </div>
  )
}
export default memo(Input);
