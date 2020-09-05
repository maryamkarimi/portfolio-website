import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Placeholder, Preloader } from 'react-preloading-screen';
import { Spinner } from 'react-bootstrap';
import ReactGA from 'react-ga';
import MainPage from './components/MainPage';
import Courses from './components/Courses/Courses';

function App() {
  const initGA = () => {
    ReactGA.initialize('UA-177220197-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  useEffect(() => { initGA(); }, []);

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
