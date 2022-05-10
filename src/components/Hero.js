import '../styles/Hero.scss';
import photo from '../images/pixlr-bg-result.png';
import MenuLinksNav from './MenuLinksNav';

const Hero = () => {

  return (
    <section className='hero' id='home'>
      <div className='hero__content'>
        <div className='hero__content__photo'>
          <img className='hero__photo' src={photo} alt='this is me' />
        </div>
        <h1 className='hero__title'  data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">¡¡Hola Mundo!! </h1>
        <h2 className='hero__subtitle' data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">Soy Cris F. Valverde</h2>

        <h3 className='hero__subtitle2'>Jr. Front-End Developer</h3>
        <article className='hero__info'>
          <p>
            Apasionada de la vida y de la gente. Muchos años gestionando grupos
            me han ayudado a trabajar mejor en equipo, contribuyendo al
            desarrollo de las personas.
          </p>
        </article>
        <MenuLinksNav />
      </div>
    </section>
  );
};
export default Hero;
