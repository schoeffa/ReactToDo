import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToDo from './ToDo';

let todos = [
    {name: 'Walk the dog.', complete: false},
    {name: 'Go to the store.', complete: true},
    {name: 'Get gas.', complete: false},
    {name: 'Wash the car.', complete: false}
];

ReactDOM.render(<ToDo todos={todos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();