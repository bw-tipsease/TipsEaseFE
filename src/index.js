import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
=======
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
>>>>>>> 0db049fcb0283ddd2678c5a547f55700678b8c37

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

