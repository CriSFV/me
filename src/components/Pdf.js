import '../styles/Pdf.scss';
import { PDFDownloadLink } from '@react-pdf/renderer';
import  cv  from '../data/cv.pdf';
import CvPdf from './Cv';

const Pdf = () => {
  return (
    <>
      <div className='cv__container'>
        <div className='cv__title'>
          <h1 className='cv__title__name'>Cristina Fernández Valverde</h1>
          <h2>Front End Developer</h2>
          {/* <PDFDownloadLink document={cv} fileName='cv.pdf'>
            <button className='download-button'>
              <i className='fas fa-download'></i>
            </button>
          </PDFDownloadLink> */}
           <CvPdf />
        </div>

        <section className='cv__left'>
          <article className='cv__article'>
            <h5 className='right__title'>OBJETIVO PROFESIONAL</h5>
            <p>
              Reinventarme en el mundo como desarrolladora frontend y dedicarme
              a ello, con una formación continua para una mejor adaptación a los
              cambios.
            </p>
          </article>
          <article className='cv__article'>
            <h5 className='right__title'>SOBRE MI</h5>
            <p>
              Apasionada de la vida y de la gente, sabiendo ver lo positivo que
              aporta cada uno. Muchos años gestionando grupos me han ayudado a
              trabajar mejor en equipo y a contribuir en el desarrollo de las
              personas.
            </p>
          </article>
          <article className='cv__article'>
            <h5 className='right__title'>SOFT SKILLS</h5>
            <ul>
              <li>
                Alta capacidad de trabajo en equipo, bajo presión y con tiempos
                limitados
              </li>
              <li>
                Capacidad para trabajar en remoto Filosofía Agile y marco de
                trabajo Scrum
              </li>
              <li>
                Comunicación efectiva Planificación y gestión eficiente de
                grandes volúmenes de trabajo
              </li>

              <li>Alta capacidad de organización y adaptación a los cambios</li>
              <li>Motivación y Automotivación</li>
            </ul>
          </article>
          <article className='cv__article'>
            <h5 className='right__title'>CONTACTO</h5>
            <ul>
              <li className='list-item'>
                <i class='fad fa-paper-plane'></i> crisfvalverde@gmail.com
              </li>
              <li className='list-item'>
                <i class='fab fa-linkedin'></i>{' '}
                www.linkedin.com/in/crisfvalverde
              </li>
              <li className='list-item'>
                <i className='fab fa-github'></i> https://github.com/CriSFV
              </li>
            </ul>
          </article>
          <div className='cv__icons'>
            <i className='fab fa-html5 icon-fa'></i>
            <i className='fab fa-css3-alt icon-fa'></i>
            <i className='fab fa-sass icon-fa'></i>
            <i className='fab fa-bootstrap icon-fa'></i>
            <i className='fab fa-react icon-fa'></i>
            <i className='fab fa-node-js icon-fa'></i>
            <i className='fab fa-js-square icon-fa'></i>
            <i className='fab fa-github icon-fa'></i>
            <i className='fab fa-slack icon-fa'></i>
          </div>
        </section>
        <div className='right__section'>
          <section className='cv__training'>
            <h3 className='section__title'>FORMACION</h3>
            <article className='cv__article'>
              <h4 className='article__title'>FRONT END DEVELOPER ADALAB</h4>
              <p>ADALAB JULIO 2021 - OCTUBRE 2021</p>
              <ul>
                <li>Maquetación: HTML5, CSS3, Flexbox, CSS Grid, SASS</li>
                <li>JavaScript (ES6) y servicios web (APIs) de terceros</li>
                <li>Creación de SPAs con React</li>
                <li>
                  Conocimientos básicos de APIs y programación back:
                  aplicaciones con NodeJS, Express y SQL
                </li>
                <li>Control de versiones con Git</li>
                <li>
                  Manejo de Slack, GitHub, VS Code, Gulp, Terminal, Linter,
                  Zeplin
                </li>
              </ul>
            </article>
            <article className='cv__article'>
              <h4 className='article__title'>GESTION INTEGRADA DE RRHH</h4>
              <p>ASPASIA MARZO 2020-MAYO 2021</p>
              <ul>
                <li>Gestión administrativa de las relaciones laborales</li>
                <li>Gestión de recursos humanos</li>
                <li>Gestión de sistemas de la información y archivos</li>
              </ul>
            </article>
          </section>
          <section className='cv__work'>
            <h3 className='section__title'>EXPERIENCIA LABORAL</h3>
            <article className='cv__article'>
              <h4 className='article__title'>El club de la radio</h4>
              <p>Febrero 2022 - actualmente</p>
              <ul>
                <li>Desarrollo web: Vuejs, Vuex y Nuxt</li>
              </ul>
            </article>
            <article className='cv__article'>
              <h4 className='article__title'>WERKHAUS SL SCS</h4>
              <p>PNL | Abril 2021-Mayo 2021</p>
              <ul>
                <li>Tecnico RRHH. Gestión y administración del personal</li>
              </ul>
            </article>

            <article className='cv__article'>
              <h4 className='article__title'>TRANSCOM TWW</h4>
              <p>Julio 2005 - Diciembre 2019</p>
              <ul>
                <li>
                  Team Leader Senior (05/2017-12/2019): gestión de equipos y
                  tareas de BU del responsable. Elaboración de previsiones,
                  informes y planes de acción para alcanzar los objetivos.
                  Control de personal
                </li>
                <li>
                  Team Leader (07/2009-05/2017): gestión de equipos y
                  seguimiento de agentes
                </li>
                <li>
                  Traffic Controller (09/2006-09/2009): realización de informes
                  y reparto de tareas
                </li>
                <li>Gestor telefónico (07/2005-09/2006)</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default Pdf;
