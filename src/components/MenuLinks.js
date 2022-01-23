import '../styles/Header.scss';
import MenuLinksNav from './MenuLinksNav';
const MenuLinks = () => {
  return (
    <>
      <nav className='home'>
        <a className='header__link__home' href='./'>
          <i className='fas fa-home'></i>
        </a>
      </nav>
      <MenuLinksNav />
      {/* <nav>
        <ul className='header__links'>
          <li>
            <NavLink className='header__link' to='./about_me'>
              Quien soy
            </NavLink>
          </li>
          <li>
            <NavLink className='header__link' to='./projects'>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink className='header__link' to='./contact'>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav> */}
    </>
  );
};
export default MenuLinks;
