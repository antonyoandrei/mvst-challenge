import "./Header.css";
import github from "../../assets/github-mark-white.svg";

/**
 * Header component.
 * @returns {JSX.Element} JSX representing the header component.
 */

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <section className="header-flex">
        <img className="github-icon" src={github} alt="github-logo" />
        <p className="header-text">Developed by Antonyo Andrei</p>
      </section>
    </header>
  );
};

export default Header;
