import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <Hastagicon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

const Hastagicon = () => {
  return (
    <FaHashtag size='20' className='title-hashtag' />
  );
};

const Title = () => {
  return (
    <h5 className='title-text'>tailwind-css</h5>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon'/>
      ) : (
        <FaMoon size='24' className='top-navigation-icon'/>
      )
      }
    </span>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type='text' placeholder='Search...' className='search-input'/>
      <FaSearch size='18' className='text-secondary my-auto'/>
    </div>
  );
};

const BellIcon = () => {
  return (
    <FaRegBell size='24' className='top-navigation-icon'/>
  );
};

const UserCircle = () => {
  return (
    <FaUserCircle size='24' className='top-navigation-icon'/>
  );
};

export default TopNavigation;