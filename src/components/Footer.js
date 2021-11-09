import '../styles/Footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__list__item'>
          <a href='https://github.com/CriSFV' target='_blank' rel='noreferrer'>
            <i class='fab fa-github' title='Go to my Github'></i>
          </a>
        </li>
        <li className='footer__list__item'>
          <a
            href='https://www.linkedin.com/in/crisfvalverde/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-linkedin-in' title='Go to my LinkedIn'></i>{' '}
          </a>
        </li>
        <li className='footer__list__item'>
          <a
            href='https://twitter.com/Krais_me'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fab fa-twitter' title='Go to my twitter'></i>{' '}
          </a>
        </li>
      </ul>
      <small className='copy'>Cris F. Valverde &copy; 2021</small>
    </footer>
  );
};
export default Footer;
