import '../styles/Hero.scss';
import photo from '../images/pixlr-bg-result.png';
const Hero = () => {
  return (
    <section className='hero' id='about_me'>
      <div className='hero__content'>
        <div className='hero__content__photo'>
          <img className='hero__photo' src={photo} alt='this is me' />
        </div>
        <h1 className='hero__title'>¡¡Hola Mundo!! </h1>
        <h2>Soy Cris F. Valverde</h2>

        <h3 className='hero__subtitle'>Jr. Front-End Developer</h3>
        <article className='hero__info'>
          <p>
            Apasionada de la vida y de la gente. Muchos años gestionando grupos
            me han ayudado a trabajar mejor en equipo contribuyendo en el
            desarrollo de las personas.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Hero;
