
// import React, { useState } from 'react';
// import './SearchBar.css';
// import searchIcon from '../../../public/images/icon-search.svg'; // Adjust the path to your image

// const SearchBar = ({ onSearch }) => {
//   const [username, setUsername] = useState('');

//   const handleSearch = () => {
//     onSearch(username);
//   };

//   return (
//     <div className="search-bar">
//       <div className="input-container">
//         <img src={searchIcon} alt="Search" className="search-icon" /> {/* Search icon */}
//         <input
//           type="text"
//           placeholder="Search GitHub username..."
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';
import './SearchBar.css';
import { useUserContext } from '../../App';
import searchIcon from '../../../public/images/icon-search.svg'; // Adjust the path to your image

const SearchBar = () => {
  const { onSearch } = useUserContext();
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div className="search-bar">
      <div className="input-container">
        <img src={searchIcon} alt="Search" className="search-icon" /> {/* Search icon */}
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
