import { useDispatch, useSelector } from 'react-redux';

const initialState = { count: 0 };

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
const reset = () => ({ type: 'RESET' });

function CounterRedux() {
  const dispatch = useDispatch();
  const countValue = useSelector((state) => state.count);

  return (
    <div>
      <h2>Redux Counter Example</h2>
      <h3>Counter = {countValue}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default CounterRedux;
export { countReducer };
