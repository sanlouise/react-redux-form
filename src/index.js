import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
//Provider enables Redux to work with react
import { Provider } from 'react-redux';
import './index.css';
import Form from './containers/Form';
import formReducer from './containers/Form/reducer.js'
import registerServiceWorker from './registerServiceWorker';

//Create the rootreducer to become our store
const rootReducer = combineReducers({
  form: formReducer,
})

//Store is is going to act like Form component, maintains all state that Inoput and Button components need so that the Form component can be a dumb componeny
const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <Form />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
