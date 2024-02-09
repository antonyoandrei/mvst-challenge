import "./Profile.css";
import people from "../../assets/people.svg";

/**
 * Profile component.
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.userData - The user data.
 * @returns {JSX.Element} JSX representing the profile component.
 */

const Profile = ({ userData }: { userData: any }): JSX.Element => {
  return (
    <article className="profile-container">
      <div
        className="profile-picture"
        style={{ backgroundImage: `url(${userData?.avatarUrl})` }}
      />
      <p className="profile-name">{userData?.name}</p>
      <p className="profile-username">{userData?.login}</p>
      <div className="people-wrapper">
        <img src={people} alt="people-svg" className="people-icon" />
        <div className="followers-container">
          <p>
            <b>{userData?.followers?.totalCount}</b>
          </p>
          <p>followers</p>
        </div>
        <p className="dot">
          <b>·</b>
        </p>
        <div className="following-container">
          <p>
            <b>{userData?.following?.totalCount}</b>
          </p>
          <p>following</p>
        </div>
      </div>
    </article>
  );
};

export default Profile;
