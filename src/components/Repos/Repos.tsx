import "./Repos.css";
import reposvg from "../../assets/repo.svg";

/**
 * Repos component.
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.userRepos - The user repositories.
 * @returns {JSX.Element} JSX representing the repos component.
 */

const Repos = ({ userRepos }: { userRepos: any[] }): JSX.Element => {
  const calculateTimeDifference = (updatedAt: string): string => {
    const updatedDate = new Date(updatedAt);
    const currentDate = new Date();
    const differenceInSeconds = Math.floor(
      (currentDate.getTime() - updatedDate.getTime()) / 1000
    );
    if (differenceInSeconds < 60) {
      return "Updated just now";
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `Updated ${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `Updated ${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `Updated ${days} day${days === 1 ? "" : "s"} ago`;
    }
  };

  return (
    <article className="repos-container">
      <div className="repos-flex">
        <img src={reposvg} alt="repo-svg" />
        <p className="repos-title">Repositories</p>
        <p className="repos-title">{userRepos.length}</p>
      </div>
      <div className="repos-wrapper">
        {userRepos.map((repo, index) => (
          <div key={index} className="repo-item">
            <a href={repo.url} target="__blank" className="repo-name">
              {repo.name}
            </a>
            {repo.description && (
              <p className="repo-text">{repo.description}</p>
            )}
            <div className="repo-info-flex">
              {repo.primaryLanguage && (
                <div className="repo-language-wrapper">
                  <span
                    className="language-color"
                    style={{
                      backgroundColor: `${repo.primaryLanguage?.color}`,
                    }}
                  />
                  <p className="repo-text">{repo.primaryLanguage?.name}</p>
                </div>
              )}
              <p className="repo-text">
                {calculateTimeDifference(repo.updatedAt)}
              </p>
            </div>
            <hr className="separator" />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Repos;
