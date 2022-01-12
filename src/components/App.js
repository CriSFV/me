import '../styles/App.scss';
import { useState } from 'react';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { data } from '../data/DataProjects';
import ContactMe from './ContactMe';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about_me' element={<AboutMe />} />
        <Route
          path='/projects'
          element={
            <Projects
              data={filteredProyect}
              userSearch={userSearch}
              handleSearch={handleSearch}
            />
          }
        />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
