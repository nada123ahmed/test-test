

// import React, { useState, useEffect } from 'react';
// import Header from './Components/Header/Header';
// import SearchBar from './Components/SearchBar/SearchBar';
// import ProfileCard from './Components/ProfileCard/ProfileCard';
// import './App.css';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(() => {
   
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });

//   const toggleTheme = () => {
//     setIsDarkMode(prevIsDarkMode => {
//       const newTheme = !prevIsDarkMode ? 'dark' : 'light';
//       localStorage.setItem('theme', newTheme); 
//       document.documentElement.setAttribute('data-theme', newTheme);
//       return !prevIsDarkMode;
//     });
//   };

//   const handleSearch = async (username) => {
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       const data = await response.json();
//       setUser(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   useEffect(() => {
   
//     document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
//   }, [isDarkMode]);

//   return (
//     <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
//       <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
//       <SearchBar onSearch={handleSearch} />
//       {user && <ProfileCard user={user} />}
//     </div>
//   );
// };

// export default App;









import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import './App.css';

// إنشاء UserContext
const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode(prevIsDarkMode => {
      const newTheme = !prevIsDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return !prevIsDarkMode;
    });
  };

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <UserContext.Provider value={{ user, toggleTheme, isDarkMode, onSearch: handleSearch }}>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <Header />
        <SearchBar />
        {user && <ProfileCard />}
      </div>
    </UserContext.Provider>
  );
};

// Custom hook for easier access to UserContext
export const useUserContext = () => useContext(UserContext);

export default App;
