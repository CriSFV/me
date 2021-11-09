import '../styles/Projects.scss';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Mis proyectos</h2>
      <ul className='projects__list'>
        <li className='projects__list__item'>
          <a
            href='https://crisfv.github.io/Maquetacion-de-una-web/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='projects__list__img'
              src={project1}
              alt='project1'
            />
          </a>
          <h4 className='projects__list__title'>
            Maquetación de una web
            <a
              href='https://github.com/CriSFV/Maquetacion-de-una-web'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-github'> </i>
            </a>
          </h4>
          {/* <ul className='projects__list__icons'>
            <li className='projects__list__icon'>
              <i class='fab fa-html5'></i>
            </li>
            <li className='projects__list__icon'>
              <i class='fab fa-sass'></i>
            </li>
            <li className='projects__list__icon'>
              <i class='fab fa-css3-alt'></i>
            </li>
            <li className='projects__list__icon'>
              <i class='fab fa-gulp'></i>
            </li>
          </ul> */}
        </li>
        <li className='projects__list__item'>
          <a
            href='crisfv.github.io/guess-the-number/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='projects__list__img'
              src={project2}
              alt='project2'
            />
          </a>
          <h4 className='projects__list__title'>
            Adivina el número
            <a
              href='https://github.com/CriSFV/Guess-the-number'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-github'></i>
            </a>
          </h4>
        </li>
        <li className='projects__list__item'>
          <a
            href='crisfv.github.io/series-searcher/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='projects__list__img'
              src={project3}
              alt='project3'
            />
          </a>
          <h4 className='projects__list__title'>
            Buscador de series
            <a
              href='https://github.com/CriSFV/Series-Searcher'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-github'></i>
            </a>
          </h4>
        </li>
        {/* <li className='projects__list__item'>Mis clubs favoritos</li>
        <li className='projects__list__item'>Buscador de personajes</li> */}
      </ul>
    </section>
  );
};

export default Projects;
