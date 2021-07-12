import { BrowserRouter as Router, Route } from 'react-router-dom';
import curDot from 'cursor-dot'
import './styles/css/main.css';

import Navigation from './components/navigation/navigation';

import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
       <div className="container">
        <div className="row">
          <Router>
          <div className="col-1-of-3"><Navigation /></div>
          <div className="col-2-of-3"> 

              <Route exact={true} path="/" component={Home} />
              <Route path={"/about"} component={About} />

          </div>
          </Router>
        </div>
      </div>
      
    </div>
  );
}

export default App;
