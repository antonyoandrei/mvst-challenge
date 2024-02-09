import Searchbar from "./Searchbar";

export default {
  title: "Searchbar",
  component: Searchbar,
};

export const SearchbarComponent = () => (
  <Searchbar
    onSearch={function (_username: string): void {
      throw new Error("Function not implemented.");
    }}
  />
);
