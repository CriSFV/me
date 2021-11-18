import '../styles/App.scss';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { data } from '../data/DataProjects';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Route path='/aboutMe'></Route> */}
      <AboutMe />
      <Projects data={data} />
      <Footer />
    </div>
  );
}

export default App;
