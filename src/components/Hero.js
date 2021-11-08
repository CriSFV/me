import '../styles/Hero.scss';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <h1 id='about_me' className='hero_title'>
          ¡¡Hola!! Soy Cris F. Valverde
        </h1>
        <h2 className='hero__subtitle'>Front-End Developer</h2>
        <article className='hero__info'>
          <p>
            Apasionada de la vida y de la gente, sabiendo ver lo positivo que
            aporta cada uno. Muchos años gestionando grupos me han ayudado a
            trabajar mejor en equipo y a contribuir en el desarrollo de las
            personas.
          </p>
        </article>
        <article>
          <p>
            Positiva, empática, con buena tolerancia al estrés y adaptabilidad a
            los cambios. Me gusta formarme de manera continua y tras muchos años
            en el mundo de la atención al cliente he decidido reinventarme en el
            mundo como desarrolladora front-end.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Hero;
