import '../styles/Footer.scss';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        También me puedes encontrar en:
        <li className='footer__list__item'>
          <a href='https://github.com/CriSFV' target='_blank' rel='noreferrer'>
            <i class='fab fa-github' title='Go to my Github'></i>
          </a>
        </li>
        <li className='footer__list__item'>
          <i class='fab fa-linkedin-in'></i>
        </li>
        <li className='footer__list__item'>
          <i class='fab fa-twitter'></i>
        </li>
      </ul>
      <small>Cris F. Valverde &copy; 2021</small>
    </footer>
  );
};
export default Footer;
