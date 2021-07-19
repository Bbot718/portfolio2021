import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import curDot from 'cursor-dot'
import './styles/css/main.css';

import Navigation from './components/navigation/navigation';

import Home from './components/home/home';
import About from './components/about/about';
import Project from './components/project/project';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Suspense>
          <Route exact={true} path="/" component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/project/"} component={Project} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
