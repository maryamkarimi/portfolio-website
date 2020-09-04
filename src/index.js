import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'animate.css/animate.min.css';

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
