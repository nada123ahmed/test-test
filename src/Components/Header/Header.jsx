


// import React from 'react';
// import './Header.css';
// import iconMoon from '../../../public/images/icon-moon.svg';
// import iconSun from '../../../public/images/icon-sun.svg';

// const Header = ({ toggleTheme, isDarkMode }) => (
//   <header>
//     <h1>devfinder</h1>
//     <div className='toggle'>
//       <button onClick={toggleTheme}>
//         {isDarkMode ? 'Light' : 'Dark'}
//       </button>
//       <span className='image'>
//         {isDarkMode ? (
//           <img src={iconSun} alt="Sun Icon" />
//         ) : (
//           <img src={iconMoon} alt="Moon Icon" />
//         )}
//       </span>
//     </div>
//   </header>
// );

// export default Header;
import React from 'react';
import { useUserContext } from '../../App';
import './Header.css';
import iconMoon from '../../../public/images/icon-moon.svg';
import iconSun from '../../../public/images/icon-sun.svg';

const Header = () => {
  const { toggleTheme, isDarkMode } = useUserContext();

  return (
    <header>
      <h1>devfinder</h1>
      <div className='toggle'>
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
        <span className='image'>
          {isDarkMode ? (
            <img src={iconSun} alt="Sun Icon" />
          ) : (
            <img src={iconMoon} alt="Moon Icon" />
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
