import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import 'animate.css/animate.min.css';

ReactDOM.render(
        <ParallaxProvider>
            <App/>
        </ParallaxProvider>,
        document.getElementById('root'),
);
