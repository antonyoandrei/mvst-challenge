import { useState } from "react";
import { toast } from "sonner";
import { Repository, UserData } from "../types/types";

/**
 * Interface representing data fetched from the GitHub API.
 * @interface FetchedData
 */

interface FetchedData {
  userData: UserData | null;
  userRepos: Repository[];
  fetchUserData: (username: string) => Promise<void>;
}

/**
 * Custom hook to fetch user data and repositories from GitHub GraphQL API.
 * @returns {Object} An object containing the state and function for fetching user data.
 */

const useData = (): FetchedData => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userRepos, setUserRepos] = useState<Repository[]>([]);

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
        toast.success("User found successfully!");
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

  return { userData, userRepos, fetchUserData };
};

export default useData;
