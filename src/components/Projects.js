import '../styles/Projects.scss';
const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h2>Mis proyectos</h2>
      <ul className='projects__list'>
        <li className='projects__list__item'>Maquetación de una web</li>
        <li className='projects__list__item'>Adivina el número</li>
        <li className='projects__list__item'>Buscador de series</li>
        <li className='projects__list__item'>Mis clubs favoritos</li>
        <li className='projects__list__item'>Buscador de personajes</li>
      </ul>
    </section>
  );
};

export default Projects;
