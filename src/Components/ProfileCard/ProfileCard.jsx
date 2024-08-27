// import React from 'react';
// import PropTypes from 'prop-types';
// import './ProfileCard.css';


// import locationIcon from '../../../public/images/icon-location.svg';
// import linkIcon from '../../../public/images/icon-website.svg';
// import twitterIcon from '../../../public/images/icon-twitter.svg';
// import companyIcon from '../../../public/images/icon-company.svg';

// const ProfileCard = ({
//   user: {
//     avatar_url,
//     name,
//     login,
//     bio,
//     public_repos,
//     followers,
//     following,
//     location,
//     blog,
//     twitter_username,
//     company,
//   },
// }) => {
//   function setDeadClass(data) {
//     return !data ? 'unavailable' : null;
//   }

//   return (
//     <div className="profile-card">
//       <div className="profile-header">
//         <img src={avatar_url} alt={name} />
//         <div className="profile-info">
//           <h2>{name}</h2>
//           <p className="bio">@{login}</p>
//           <p>{bio || 'This profile has no bio'}</p>
//         </div>
//       </div>

//       <div className="profile-stats">
//         <div className="stat-item">
//           <span>Repos</span>
//           <p>{public_repos}</p>
//         </div>
//         <div className="stat-item">
//           <span>Followers</span>
//           <p>{followers}</p>
//         </div>
//         <div className="stat-item">
//           <span>Following</span>
//           <p>{following}</p>
//         </div>
//       </div>

//       <div className="profile-links">
//         <ul>
//           <li className={setDeadClass(location)}>
//             <img src={locationIcon} alt="Location Icon" /> {location || 'Not Available'}
//           </li>
//           <li className={setDeadClass(blog)}>
//             <img src={linkIcon} alt="Website Icon" /> {blog ? <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a> : 'Not Available'}
//           </li>
//         </ul>
//         <ul>
//           <li className={setDeadClass(twitter_username)}>
//             <img src={twitterIcon} alt="Twitter Icon" /> {twitter_username || 'Not Available'}
//           </li>
//           <li className={setDeadClass(company)}>
//             <img src={companyIcon} alt="Company Icon" /> {company || 'Not Available'}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// ProfileCard.propTypes = {
//   user: PropTypes.shape({
//     avatar_url: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     login: PropTypes.string.isRequired,
//     bio: PropTypes.string,
//     public_repos: PropTypes.number.isRequired,
//     followers: PropTypes.number.isRequired,
//     following: PropTypes.number.isRequired,
//     location: PropTypes.string,
//     blog: PropTypes.string,
//     twitter_username: PropTypes.string,
//     company: PropTypes.string,
//   }).isRequired,
// };

// export default ProfileCard;
import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css';
import { useUserContext } from '../../App';

// Import icons
import locationIcon from '../../../public/images/icon-location.svg';
import linkIcon from '../../../public/images/icon-website.svg';
import twitterIcon from '../../../public/images/icon-twitter.svg';
import companyIcon from '../../../public/images/icon-company.svg';

const ProfileCard = () => {
  const { user } = useUserContext();
  const { avatar_url, name, login, bio, public_repos, followers, following, location, blog, twitter_username, company } = user;

  function setDeadClass(data) {
    return !data ? 'unavailable' : null;
  }

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={avatar_url} alt={name} />
        <div className="profile-info">
          <h2>{name}</h2>
          <p className="bio">@{login}</p>
          <p>{bio || 'This profile has no bio'}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-item">
          <span>Repos</span>
          <p>{public_repos}</p>
        </div>
        <div className="stat-item">
          <span>Followers</span>
          <p>{followers}</p>
        </div>
        <div className="stat-item">
          <span>Following</span>
          <p>{following}</p>
        </div>
      </div>

      <div className="profile-links">
        <ul>
          <li className={setDeadClass(location)}>
            <img src={locationIcon} alt="Location Icon" /> {location || 'Not Available'}
          </li>
          <li className={setDeadClass(blog)}>
            <img src={linkIcon} alt="Website Icon" /> {blog ? <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a> : 'Not Available'}
          </li>
        </ul>
        <ul>
          <li className={setDeadClass(twitter_username)}>
            <img src={twitterIcon} alt="Twitter Icon" /> {twitter_username || 'Not Available'}
          </li>
          <li className={setDeadClass(company)}>
            <img src={companyIcon} alt="Company Icon" /> {company || 'Not Available'}
          </li>
        </ul>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
