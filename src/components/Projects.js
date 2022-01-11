import '../styles/Projects.scss';
import { ProjectsFilter } from './ProjectsFilter';

const Projects = (props) => {
  const printTags = (tags) => {
    return tags.map((eachTag, i) => {
      return (
        <li className='tags' key={i}>
          {eachTag}
        </li>
      );
    });
  };

  const printProjects = () =>
    props.data.map((project, index) => {
      return (
        <li className='projects__list__item' key={index} id={index}>
          <a
            href={project.gitHubPages}
            target='_blank'
            rel='noreferrer'
            title='Ir a la pagina'
          >
            <img
              className='projects__list__img'
              src={project.img}
              title={project.title}
              alt='project'
            />
          </a>
          <h4 className='projects__list__title'>
            {project.title}
            <a
              href={project.gitHub}
              target='_blank'
              rel='noreferrer'
              title='Ir al repositorio'
            >
              <i className='fab fa-github projects__list__icon'></i>
            </a>
          </h4>
          <p className='projects__list__comment'>{project.comment}</p>
          <ul>{printTags(project.tags)}</ul>
        </li>
      );
    });

  return (
    <>
      <section className='projects' id='projects'>
        <h2 className='projects__title'>Mis proyectos</h2>
        <ProjectsFilter
          userSearch={props.userSearch}
          handleSearch={props.handleSearch}
        />
        <ul className='projects__list'>{printProjects()}</ul>
      </section>
    </>
  );
};

export default Projects;
