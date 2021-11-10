import '../styles/AboutMe.scss';
const AboutMe = () => {
  return (
    <section className='aboutMe'>
      <h1 id='about_me' className='aboutMe__title'>
        Cónoceme
      </h1>
      <article className='aboutMe__allDescription'>
        <h3>Esta soy yo</h3>
        <p className='aboutMe__description'>
          Estudié dos años de Educación Social hasta que, haciendo las prácticas
          de la carrera, vi que no era lo mio, así que me puse a trabajar en el
          sector de atención al cliente, donde mayoritariamente he estado
          gestionando equipos en diferentes campañas y a diferentes niveles.
        </p>
        <p className='aboutMe__description'>
          Después de unos cuantos años allí, me dí cuenta de que quería cambiar
        </p>
        <p className='aboutMe__description'>
          Siempre me había llamado la atención el tema de la programación aunque
          pensaba que ya sería un poco tarde para dar un cambio en mi vida pero
          al final, tras dejarme aconsejar por gente que me conocía sobre mis
          expectativas encontré Adalab y tras realizar su bootcamp, aquí estoy,
          Jr Front-End Dev encontrando su sitio en el mundo tech.
        </p>
      </article>
      <article className='skill'>
        <h2>Habilidades</h2>
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
    </section>
  );
};

export default AboutMe;
