import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Placeholder, Preloader } from 'react-preloading-screen';
import { Spinner } from 'react-bootstrap';
import MainPage from './components/MainPage';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/courses" component={Courses} />
        </Switch>
      </BrowserRouter>
      <Preloader>
        <Placeholder>
          <div id="load-page" className="center text-center">
            <Spinner className="spinner" animation="border" role="status" />
          </div>
        </Placeholder>
      </Preloader>
    </div>
  );
}

export default App;
