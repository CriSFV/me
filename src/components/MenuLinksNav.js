import { NavLink } from 'react-router-dom';
const MenuLinksNav = () => {
  return (
    <nav>
      <ul className='header__links'>
        <li>
          <NavLink className='header__link' to='./about_me'>
            Yo
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
    </nav>
  );
};
export default MenuLinksNav;
