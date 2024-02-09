import { useState } from "react";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Searchbar from "./components/Searchbar/Searchbar";
import { Toaster, toast } from "sonner";

/**
 * Main application component.
 * @returns {JSX.Element} The JSX for the application.
 */

function App(): JSX.Element {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  /**
   * Fetches user data and repositories from GitHub GraphQL API.
   * @param {string} username - GitHub username to fetch data for.
   */

  const fetchUserData = async (username: string) => {
    try {
      if (!username) {
        toast.info("Username is needed!");
        return;
      }

      const query = `
        query {
          user(login: "${username}") {
            name
            avatarUrl
            login
            followers {
              totalCount
            }
            following {
              totalCount
            }
            repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
              totalCount
              nodes {
                name
                description
                url
                updatedAt
                primaryLanguage {
                  name
                  color
                }
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history(first: 1) {
                        nodes {
                          committedDate
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        toast.success("User found successfuly!");
      }

      const { data, errors } = await response.json();

      if (errors) {
        toast.error("Failed to fetch user data.");
        console.error("GraphQL Error:", errors);
        return;
      }

      const { user } = data;

      if (!user) {
        toast.error("User not found.");
        return;
      }

      setUserData(user);
      setUserRepos(user.repositories.nodes);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--black)",
            border: "var(--black)",
            color: "var(--light-grey)",
          },
        }}
      />
      <Searchbar onSearch={fetchUserData} />
      <Results userData={userData} userRepos={userRepos} />
    </>
  );
}

export default App;
