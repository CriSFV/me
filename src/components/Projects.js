import '../styles/Projects.scss';

const Projects = (props) => {
  console.log(props);
  const printProjects = () =>
    props.data.map((project, index) => {
      console.log(project.gitHubPages);
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
