import "./Repos.css";
import reposvg from "../../assets/repo.svg";
import triangle from "../../assets/triangle-down.svg";
import check from "../../assets/check.svg";
import { useState, useEffect, useRef } from "react";

/**
 * Repos component.
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.userRepos - The user repositories.
 * @returns {JSX.Element} JSX representing the repos component.
 */

const Repos = ({ userRepos }: { userRepos: any[] }): JSX.Element => {
  const [languages, setLanguages] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("updated");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [languageModalVisible, setLanguageModalVisible] =
    useState<boolean>(false);
  const [orderModalVisible, setOrderModalVisible] = useState<boolean>(false);
  const [isLanguageModalActive, setIsLanguageModalActive] =
    useState<boolean>(false);
  const [isOrderModalActive, setIsOrderModalActive] = useState<boolean>(false);

  useEffect(() => {
    const uniqueLanguages = userRepos.reduce((acc: string[], repo: any) => {
      if (repo.primaryLanguage && !acc.includes(repo.primaryLanguage.name)) {
        return [...acc, repo.primaryLanguage.name];
      }
      return acc;
    }, []);
    setLanguages(["All", ...uniqueLanguages]);
    setSortBy("updated");
  }, [userRepos]);

  const handleSortBy = (option: string) => {
    setSortBy(option);
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const filterReposByLanguage = (repos: any[], language: string) => {
    return language === "All"
      ? repos
      : repos.filter((repo) => repo.primaryLanguage?.name === language);
  };

  const sortRepos = (repos: any[], order: string) => {
    return [...repos].sort((a, b) => {
      if (order === "updated") {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      } else if (order === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  };

  const filteredRepos = sortRepos(
    filterReposByLanguage(userRepos, selectedLanguage),
    sortBy
  );

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

  const toggleLanguageModal = () => {
    setLanguageModalVisible(!languageModalVisible);
    setIsLanguageModalActive(!isLanguageModalActive);
  };

  const toggleOrderModal = () => {
    setOrderModalVisible(!orderModalVisible);
    setIsOrderModalActive(!isOrderModalActive);
  };

  const languageModalRef = useRef<HTMLDivElement>(null);
  const orderModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element | null;

      const clickedOutsideModal =
        (languageModalRef.current &&
          !languageModalRef.current.contains(targetElement) &&
          languageModalVisible &&
          !targetElement?.closest("#languageContainer")) ||
        (orderModalRef.current &&
          !orderModalRef.current.contains(targetElement) &&
          orderModalVisible &&
          !targetElement?.closest("#orderContainer"));

      if (clickedOutsideModal) {
        setLanguageModalVisible(false);
        setIsLanguageModalActive(false);
        setOrderModalVisible(false);
        setIsOrderModalActive(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageModalVisible(false);
        setIsLanguageModalActive(false);
        setOrderModalVisible(false);
        setIsOrderModalActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [languageModalVisible, orderModalVisible]);

  return (
    <article className="repos-container">
      <div className="repos-flex">
        <div className="repos-title-flex">
          <img src={reposvg} alt="repo-svg" />
          <p className="repos-title">Repositories</p>
          <p className="repos-title">{userRepos.length}</p>
        </div>
        <div className="repos-sort-flex">
          <summary className="trigger-container" id="languageContainer">
            <button
              className={`btn ${isLanguageModalActive ? "active" : ""}`}
              onClick={toggleLanguageModal}
            >
              <span>Language</span>
              <span className="triangle-span">
                <img src={triangle} alt="triangle-svg" />
              </span>
            </button>
            <div
              className={`modal ${
                languageModalVisible ? "visible-modal" : "hidden-modal"
              }`}
              id="languageModal"
              ref={languageModalRef}
            >
              <div className="modal-title-wrapper">
                <p className="modal-title">Select language</p>
                <button className="modal-close" onClick={toggleLanguageModal}>
                  x
                </button>
              </div>
              <div className="select-list">
                {languages.map((language, index) => (
                  <label className="select-option" key={index}>
                    <input
                      type="radio"
                      hidden
                      checked={selectedLanguage === language}
                      onChange={() => handleSelectLanguage(language)}
                      onClick={toggleLanguageModal}
                    />
                    <img
                      src={check}
                      alt="check-svg"
                      className={`check-icon ${
                        selectedLanguage === language ? "visible" : "hidden"
                      }`}
                    />
                    <p>{language}</p>
                  </label>
                ))}
              </div>
            </div>
          </summary>
          <summary className="trigger-container" id="orderContainer">
            <button
              className={`btn ${isOrderModalActive ? "active" : ""}`}
              onClick={toggleOrderModal}
            >
              <span>Sort</span>
              <span className="triangle-span">
                <img src={triangle} alt="triangle-svg" />
              </span>
            </button>
            <div
              className={`modal ${
                orderModalVisible ? "visible-modal" : "hidden-modal"
              }`}
              id="orderModal"
              ref={orderModalRef}
            >
              <div className="modal-title-wrapper">
                <p className="modal-title">Select order</p>
                <button className="modal-close" onClick={toggleOrderModal}>
                  x
                </button>
              </div>
              <div className="select-list">
                <label className="select-option">
                  <input
                    type="radio"
                    hidden
                    checked={sortBy === "updated"}
                    onChange={() => handleSortBy("updated")}
                    onClick={toggleOrderModal}
                  />
                  <img
                    src={check}
                    alt="check-svg"
                    className={`check-icon ${
                      sortBy === "updated" ? "visible" : "hidden"
                    }`}
                  />
                  <p>Last updated</p>
                </label>
                <label className="select-option">
                  <input
                    type="radio"
                    hidden
                    checked={sortBy === "name"}
                    onChange={() => handleSortBy("name")}
                    onClick={toggleOrderModal}
                  />
                  <img
                    src={check}
                    alt="check-svg"
                    className={`check-icon ${
                      sortBy === "name" ? "visible" : "hidden"
                    }`}
                  />
                  <p>Name</p>
                </label>
              </div>
            </div>
          </summary>
        </div>
      </div>
      <div className="repos-wrapper">
        {filteredRepos.map((repo, index) => (
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
