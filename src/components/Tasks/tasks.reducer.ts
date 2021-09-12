export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const initState: any[] = [];
type ActionType = 
  | { type: typeof ADD_TASK, payload: Object } 
  | {type: typeof DELETE_TASK, payload: Object};

export default function reducer(state: typeof initState, action: ActionType) {

  switch(action.type) {
    case ADD_TASK:
      return [...state, {...action.payload}];
    case DELETE_TASK:
      const index = state.findIndex((e) => e.id === action.payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}