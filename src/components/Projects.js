import '../styles/Projects.scss';
import project1 from '../images/project1.png';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2>Mis proyectos</h2>
      <ul className='projects__list'>
        <li className='projects__list__item'>
          <img className='projects__list__img' src={project1} alt='project1' />
          <h4>Maquetación de una web</h4>
        </li>
        <li className='projects__list__item'>Adivina el número</li>
        <li className='projects__list__item'>Buscador de series</li>
        <li className='projects__list__item'>Mis clubs favoritos</li>
        <li className='projects__list__item'>Buscador de personajes</li>
      </ul>
    </section>
  );
};

export default Projects;
