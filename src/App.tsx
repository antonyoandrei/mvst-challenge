import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Searchbar from "./components/Searchbar/Searchbar";
import { Toaster } from "sonner";
import useData from "./hooks/useData";

/**
 * Main application component.
 * @returns {JSX.Element} The JSX for the application.
 */

function App(): JSX.Element {
  const { userData, userRepos, fetchUserData } = useData();

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
