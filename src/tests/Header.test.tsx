import { render } from "@testing-library/react";
import Header from "../components/Header/Header";
import "@testing-library/jest-dom";

test("renders header component", () => {
  const { getByAltText, getByText } = render(<Header />);

  const githubLogo = getByAltText("github-logo");
  expect(githubLogo).toBeInTheDocument();

  const developerName = getByText("Developed by Antonyo Andrei");
  expect(developerName).toBeInTheDocument();
});
