import { render, fireEvent } from "@testing-library/react";
import Searchbar from "../components/Searchbar/Searchbar";
import "@testing-library/jest-dom";

describe("Searchbar component", () => {
  it("renders without crashing", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByAltText } = render(
      <Searchbar onSearch={mockOnSearch} />
    );

    const inputElement = getByPlaceholderText("Username...");
    const searchIcon = getByAltText("search-icon");

    expect(inputElement).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it("triggers onSearch callback when search button is clicked", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByAltText } = render(
      <Searchbar onSearch={mockOnSearch} />
    );

    const inputElement = getByPlaceholderText("Username...");
    const searchIcon = getByAltText("search-icon");

    fireEvent.change(inputElement, { target: { value: "testUser" } });
    fireEvent.click(searchIcon);

    expect(mockOnSearch).toHaveBeenCalledWith("testUser");
  });

  it("triggers onSearch callback when Enter key is pressed in input field", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Searchbar onSearch={mockOnSearch} />
    );

    const inputElement = getByPlaceholderText("Username...");

    fireEvent.change(inputElement, { target: { value: "testUser" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockOnSearch).toHaveBeenCalledWith("testUser");
  });
});
