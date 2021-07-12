import Header from './header/header';
import Work from './work/work';
import About from './about/about';
import Contact from './contact/contact';

function Home() {
  return (
    <div className="home">
      <Header/>
      <Work/>  
      <div className="spacing-xl"/>
      <Contact />
    </div>
  );
}

export default Home;
