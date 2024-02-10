import { render } from "@testing-library/react";
import Profile from "../components/Profile/Profile";
import "@testing-library/jest-dom";

describe("Profile component", () => {
  it("renders with user data", () => {
    const userData = {
      name: "Github Name",
      login: "githubname",
      avatarUrl: "https://example.com/avatar.jpg",
      followers: { totalCount: 100 },
      following: { totalCount: 50 },
    };

    const { getByText, getByAltText } = render(<Profile userData={userData} />);

    expect(getByText(userData.name)).toBeInTheDocument();
    expect(getByText(userData.login)).toBeInTheDocument();
    expect(getByAltText("people-svg")).toBeInTheDocument();
    expect(getByText(userData.followers.totalCount)).toBeInTheDocument();
    expect(getByText(userData.following.totalCount)).toBeInTheDocument();
  });
});
