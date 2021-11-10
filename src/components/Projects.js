import '../styles/Projects.scss';
import projects from '../data/projects.json';

const Projects = () => {
  const printProjects = () =>
    projects.map((project, i) => {
      return (
        <li className='projects__list__item' key={i}>
          <a href={project.gitHubPages} target='_blank' rel='noreferrer'>
            <img
              className='projects__list__img'
              src={project.img}
              alt='project'
            />
          </a>
          <h4 className='projects__list__title'>
            {project.title}
            <a href={project.gitHubPages} target='_blank' rel='noreferrer'>
              <i className='fab fa-github projects__list__icon'></i>
            </a>
          </h4>
        </li>
      );
    });

  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Mis proyectos</h2>
      <ul className='projects__list'>{printProjects()}</ul>
    </section>
  );
};

export default Projects;
