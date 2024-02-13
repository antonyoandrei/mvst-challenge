import { useEffect, useState } from "react";
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
  const [animation, setAnimation] = useState("");
  
  useEffect(() => {
    setAnimation("fade 1s ease 0s 1 normal forwards");
    const timeout = setTimeout(() => {
      setAnimation("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [userData]);

  return (
    <section className="results-container" style={{ animation }}>
      {userData && <Profile userData={userData} />}
      {userRepos && userRepos.length > 0 && <Repos userRepos={userRepos} />}
      {!userData && <h1 className="fallback-text">Start searching!</h1>}
    </section>
  );
};

export default Results;
