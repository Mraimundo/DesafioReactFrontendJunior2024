import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FooterLinks } from "../components/FooterLinks";
describe("FooterLinks component", () => {
  test("should renders footer with correct text content", () => {
    render(<FooterLinks />);

    expect(screen.getByText("Double-click to edit a todo")).toBeInTheDocument();
    expect(screen.getByText("Template by")).toBeInTheDocument();
    expect(screen.getByText("Sindre Sorhus")).toBeInTheDocument();
    expect(
      screen.getByText("Created by Mouzinho Raimundo")
    ).toBeInTheDocument();
  });
});
