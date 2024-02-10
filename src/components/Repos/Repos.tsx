import "./Repos.css";
import reposvg from "../../assets/repo.svg";
import triangle from "../../assets/triangle-down.svg";
import check from "../../assets/check.svg";

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
        <div className="repos-title-flex">
          <img src={reposvg} alt="repo-svg" />
          <p className="repos-title">Repositories</p>
          <p className="repos-title">{userRepos.length}</p>
        </div>
        <div className="repos-sort-flex">
          <summary className="trigger-container">
            <button className="btn">
              <span>Language</span>
              <span className="triangle-span">
                <img src={triangle} alt="triangle-svg" />
              </span>
            </button>
            <div className="modal hidden-modal">
              <div className="modal-title-wrapper">
                <p className="modal-title">Select language</p>
                <button className="modal-close">x</button>
              </div>
              <div className="select-list">
                <label className="select-option">
                  <input type="radio" hidden checked />
                  <img src={check} alt="check-svg" className="check-icon" />
                  <p>All</p>
                </label>
              </div>
            </div>
          </summary>
          <summary className="trigger-container">
            <button className="btn">
              <span>Sort</span>
              <span className="triangle-span">
                <img src={triangle} alt="triangle-svg" />
              </span>
            </button>
            <div className="modal hidden-modal">
              <div className="modal-title-wrapper">
                <p className="modal-title">Select order</p>
                <button className="modal-close">x</button>
              </div>
              <div className="select-list">
                <label className="select-option">
                  <input type="radio" hidden checked />
                  <img src={check} alt="check-svg" className="check-icon" />
                  <p>Last updated</p>
                </label>
                <label className="select-option">
                  <input type="radio" hidden checked />
                  <img src={check} alt="check-svg" className="check-icon" />
                  <p>Name</p>
                </label>
              </div>
            </div>
          </summary>
        </div>
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
