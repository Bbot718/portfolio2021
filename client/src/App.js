import { BrowserRouter as Router, Route } from 'react-router-dom';
import curDot from 'cursor-dot'
import './styles/css/main.css';

import Navigation from './components/navigation/navigation';

import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact={true} path="/" component={Home} />
        <Route path={"/about"} component={About} />
      </Router>
    </div>
  );
}

export default App;
