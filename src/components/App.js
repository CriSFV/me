import '../styles/App.scss';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { data } from '../data/DataProjects';
import ContactMe from './ContactMe';
//import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Hero />

      <AboutMe />
      <Projects data={data} />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
