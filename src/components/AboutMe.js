import '../styles/AboutMe.scss';
import CvPdf from './Cv';

const AboutMe = () => {
  return (
    <section className='aboutMe'>
      <h2 id='about_me' className='aboutMe__title'>
        Sobre mi
      </h2>
      <article className='aboutMe__allDescription'>
        <h3>Esta soy yo</h3>
        <p className='aboutMe__description'>
          Estudié Educación Social hasta que, haciendo las prácticas de la
          carrera, vi que no era lo mío, así que me puse a trabajar en el sector
          de atención al cliente, donde mayoritariamente he estado gestionando
          equipos en diferentes campañas y a distintos niveles.
        </p>
        <p className='aboutMe__description'>
          Después de unos años allí, me dí cuenta de que necesitaba mejorar mi
          formación y ampliar horizontes.
        </p>
        <p className='aboutMe__description'>
          Siempre me había llamado la atención el tema de la programación y,
          tras dejarme aconsejar por amigos que conocían mis expectativas y
          capacidades, encontré Adalab, realicé su bootcamp y aquí estoy,
          Desarrolladora Front-End Jr buscando mi sitio en el mundo tech.
        </p>
      </article>

      <article className='skill'>
        <h3>Habilidades</h3>
        <ul className='skill__list'>
          <li className='skill__list__item'>HTML5</li>
          <li className='skill__list__item'>SASS</li>
          <li className='skill__list__item'>CSS3</li>
          <li className='skill__list__item'>JavaScript</li>
          <li className='skill__list__item'>React</li>
          <li className='skill__list__item'>NodeJs</li>
          <li className='skill__list__item'>Express</li>
          <li className='skill__list__item'>SQLite</li>
          <li className='skill__list__item'>Git</li>
          <li className='skill__list__item'>GitHub</li>
          <li className='skill__list__item'>Slack</li>
          <li className='skill__list__item'>VsCode</li>
          <li className='skill__list__item'>Terminal</li>
        </ul>
      </article>
      <CvPdf />
    </section>
  );
};

export default AboutMe;
