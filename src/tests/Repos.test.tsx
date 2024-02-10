import { render } from "@testing-library/react";
import Repos from "../components/Repos/Repos";
import "@testing-library/jest-dom";

describe("Repos component", () => {
  it("renders with user repos", () => {
    const userRepos = [
      {
        name: "Repo 1",
        url: "https://github.com/user/repo1",
        description: "Description of Repo 1",
        primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
        updatedAt: "2024-02-09T12:34:56Z",
      },
      {
        name: "Repo 2",
        url: "https://github.com/user/repo2",
        description: null,
        primaryLanguage: null,
        updatedAt: "2024-02-08T10:20:30Z",
      },
    ];

    const { getByText } = render(<Repos userRepos={userRepos} />);

    expect(getByText("Repositories")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();

    userRepos.forEach((repo) => {
      expect(getByText(repo.name)).toBeInTheDocument();
      if (repo.description) {
        expect(getByText(repo.description)).toBeInTheDocument();
      }
      if (repo.primaryLanguage) {
        expect(getByText(repo.primaryLanguage.name)).toBeInTheDocument();
      }
    });
  });
});
