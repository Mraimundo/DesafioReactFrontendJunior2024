import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";

describe("Header component", () => {
  it("should renders the header title", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { name: /todos/i });
    expect(heading).toBeInTheDocument();
  });

  it("should renders the Input component with the correct placeholder", () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(/What needs to be done\?/i);
    expect(input).toBeInTheDocument();
  });
});
