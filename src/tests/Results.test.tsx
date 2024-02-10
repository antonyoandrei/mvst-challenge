import { render } from "@testing-library/react";
import Results from "../components/Results/Results";
import "@testing-library/jest-dom";

describe("Results component", () => {
  it("renders with user data and repositories", () => {
    const userData = {
      name: "Github Name",
      login: "githubname",
      avatarUrl: "https://example.com/avatar.jpg",
      followers: { totalCount: 100 },
      following: { totalCount: 50 },
    };

    const userRepos = [
      { id: 1, name: "repo1" },
      { id: 2, name: "repo2" },
    ];

    const { getByText, queryByText } = render(
      <Results userData={userData} userRepos={userRepos} />
    );

    expect(getByText(userData.name)).toBeInTheDocument();
    expect(getByText(userData.login)).toBeInTheDocument();
    expect(queryByText("Start searching!")).not.toBeInTheDocument();
    expect(getByText("repo1")).toBeInTheDocument();
    expect(getByText("repo2")).toBeInTheDocument();
  });

  it("renders without user data and repositories", () => {
    const { getByText } = render(<Results userData={null} userRepos={[]} />);

    expect(getByText("Start searching!")).toBeInTheDocument();
  });
});
