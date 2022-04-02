import { NavLink } from 'react-router-dom';
const MenuLinksNav = () => {
  return (
    <nav>
      <ul className='header__links'>
        <li>
          <NavLink className='header__link' to='./projects'>
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink className='header__link' to='./about_me'>
            Conoceme
          </NavLink>
        </li>
        <li>
          <NavLink className='header__link' to='./contact'>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink className='header__link' to='./cv'>
            CV
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MenuLinksNav;
