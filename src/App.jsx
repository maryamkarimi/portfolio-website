import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Placeholder, Preloader } from 'react-preloading-screen'
import { Spinner } from 'react-bootstrap'
import ReactGA from 'react-ga'
import MainPage from './pages/MainPage/MainPage'
import Courses from './pages/Courses/Courses'
import './styles/global.scss'

function App() {
    const initGA = () => {
        ReactGA.initialize('UA-177220197-1')
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

  useEffect(() => {
    initGA();
  }, []);

  return (
          <div>
              <BrowserRouter>
                  <Switch>
                      <Route path="/" component={MainPage} exact/>
                      <Route path="/courses" component={Courses}/>
                  </Switch>
              </BrowserRouter>
              <Preloader>
                  <Placeholder>
                      <div id="load-page" className="center text-center">
                          <Spinner className="spinner" animation="border" role="status"/>
                      </div>
                  </Placeholder>
              </Preloader>
          </div>
  );
}

export default App;
