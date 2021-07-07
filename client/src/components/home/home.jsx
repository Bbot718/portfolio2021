import Header from './header/header';
import Work from './work/work';


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-1-of-3"></div>
          <div className="col-2-of-3">
            <Header/>
            <Work/>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
