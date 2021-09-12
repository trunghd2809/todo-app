import { FC, memo, useContext, useReducer, useCallback } from 'react';
import AuthContext from '../Auth/auth.context';
import AddTask from './add';
import Task from './task';
import taskReducer, { initState, ADD_TASK, DELETE_TASK } from './tasks.reducer';
import css from './Tasks.module.scss';

const Tasks: FC = () => {
  const { isLogin } = useContext(AuthContext);
  const [tasks, dispatch] = useReducer(taskReducer, initState);

  const addTask = useCallback((task) => { dispatch({ type: ADD_TASK, payload: task }) }, []);
  const deleteTask = useCallback((id: number) => { dispatch({ type: DELETE_TASK, payload: id }) }, []);

  if (!isLogin) return null;
  return (
    <div className={css.container}>
      <div className={css.tasks}>
        <AddTask addTask={addTask}/>
        {tasks.map((task) => {
          return (
            <Task task={task} deleteTask={deleteTask} key={task.id} />
          );
        })}
      </div>
    </div>
  );
}
export default memo(Tasks);
