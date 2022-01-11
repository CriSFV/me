import '../styles/App.scss';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { data } from '../data/DataProjects';
import ContactMe from './ContactMe';
//import { Link, Route } from 'react-router-dom';

function App() {
  const [userSearch, setUserSearch] = useState('all');
  const handleSearch = (value) => {
    setUserSearch(value);
  };
  return (
    <div className='page'>
      <Header />
      <Hero />

      <AboutMe />
      <Projects
        data={data}
        userSearch={userSearch}
        handleSearch={handleSearch}
      />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
