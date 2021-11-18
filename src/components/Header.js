import '../styles/Header.scss';
import MenuLinks from './MenuLinks';
//import icoMenu from '../images/ico-menu.svg';

const Header = () => {
  return (
    <header className='header'>
      <MenuLinks />
      {/* <img
        className='header__ico'
        src={icoMenu}
        title={'menu'}
        alt='menu'
        onClick={handleMenu()}
      /> */}
    </header>
  );
};
export default Header;
