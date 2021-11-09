import '../styles/Header.scss';
import MenuLinks from './MenuLinks';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'></div>
      <MenuLinks />
    </header>
  );
};
export default Header;
