import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterRedux, { countReducer } from './components/counterRedux'; // Import countReducer here

const store = createStore(countReducer); // Pass the countReducer to createStore

function App() {
  return (
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  );
}

export default App;
