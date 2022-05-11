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

    </>
  );
};
export default MenuLinks;
