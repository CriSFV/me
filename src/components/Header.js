import '../styles/Header.scss';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <nav>
          <ul className='header__links'>
            <li>
              <a className='header__link' href='./index.html#about_me'>
                Quien soy
              </a>
            </li>
            <li>
              <a className='header__link' href='./index.html#projects'>
                Proyectos
              </a>
            </li>
            <li>
              <a className='header__link' href='./index.html#contact'>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
