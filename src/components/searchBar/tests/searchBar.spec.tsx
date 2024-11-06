import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../searchBar";

const mockOnSearch = jest.fn();

describe("SearchBar", () => {
  beforeEach(() => {
    mockOnSearch.mockClear();
  });
  test("renders SearchBar component with input and button", () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    expect(
      screen.getByPlaceholderText("Search weather for any city")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });
  test("updates input value on change", () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Search weather for any city");
    fireEvent.change(input, { target: { value: "Vadodara" } });
    expect(input).toHaveValue("Vadodara");
  });
  test("calls onSearch with input value when search button is clicked", () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Search weather for any city");
    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.change(input, { target: { value: "Vadodara" } });
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledWith("Vadodara");
    expect(input).toHaveValue("");
  });
  test("calls onSearch with input value when Enter key is pressed", () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Search weather for any city");
    fireEvent.change(input, { target: { value: "Vadodara" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(mockOnSearch).toHaveBeenCalledWith("Vadodara");
    expect(input).toHaveValue("");
  });
  test("does not call onSearch when input is empty", () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
