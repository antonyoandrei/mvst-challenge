import Profile from "../Profile/Profile";
import Repos from "../Repos/Repos";
import "./Results.css";

/**
 * Results component.
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.userData - The user data.
 * @param {Array} props.userRepos - The user repositories.
 * @returns {JSX.Element} JSX representing the results component.
 */

const Results = ({ userData, userRepos }: { userData: any, userRepos: any[] }): JSX.Element => {
  return (
    <section className="results-container">
      {userData && <Profile userData={userData} />}
      {userRepos && userRepos.length > 0 && <Repos userRepos={userRepos} />}
      {!userData && <h1 className="fallback-text">Start searching!</h1>}
    </section>
  );
};

export default Results;
