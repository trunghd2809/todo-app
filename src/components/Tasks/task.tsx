import { FC, memo } from 'react';
import css from './Tasks.module.scss';

interface ITask {
  id: number;
  name: string;
};

type StateProps = {
  deleteTask: (id: number) => void;
  task: ITask;
};

const Task: FC<StateProps> = ({ deleteTask, task }) => {
  return (
    <div className={css.item}>
      <span>{task.name}</span>
      <label onClick={() => deleteTask(task.id)}>Delete</label>
    </div>
  );
}
export default memo(Task);