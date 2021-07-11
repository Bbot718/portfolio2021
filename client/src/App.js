import curDot from 'cursor-dot'
import './styles/css/main.css';

import Navigation from './components/navigation/navigation';

import Home from './components/home/home';

function App() {
  return (
    <div className="App">
       <div className="container">
        <div className="row">
          <div className="col-1-of-3"><Navigation /></div>
          <div className="col-2-of-3">
            <Home />        
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
