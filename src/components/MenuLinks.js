const MenuLinks = () => {
  return (
    <nav>
      <ul className='header__links'>
        <li>
          <a className='header__link__home' href='./index.html#home'>
            <i className='fas fa-home'></i>
          </a>
        </li>
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
        {/* <li>
          <a className='header__link' href='./index.html#contact'>
            Contacto
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
export default MenuLinks;
