import { FC, MouseEvent, useRef, memo } from 'react';
import useHandleChange from '../../hooks/useHandleChange';
import css from './Tasks.module.scss';

type StateProps = {
  addTask: (task: any) => void,
}
const AddTask: FC<StateProps> = ({ addTask }) => {
  const name = useHandleChange('');
  const nextId = useRef<number>(1);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (name.value) {
      addTask({ id: nextId.current, name: name.value });
      nextId.current += 1;
    };
  }

  return (
    <div className={css.add}>
      <input value={name.value} onChange={name.handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default memo(AddTask);
