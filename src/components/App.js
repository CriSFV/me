import '../styles/App.scss';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { data } from '../data/DataProjects';
import ContactMe from './ContactMe';

function App() {
  const [userSearch, setUserSearch] = useState('all');

  const handleSearch = (value) => {
    setUserSearch(value);
  };

  const filteredProyect = data.filter(
    (eachProject) =>
      eachProject.tags.includes(userSearch) || userSearch === 'all'
  );

  return (
    <div className='page'>
      <Header />
      <Hero />

      <AboutMe />
      <Projects
        data={filteredProyect}
        userSearch={userSearch}
        handleSearch={handleSearch}
      />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
