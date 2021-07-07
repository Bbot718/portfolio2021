import Header from './header/header';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-1-of-3"></div>
          <div className="col-2-of-3">
            <Header/>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
