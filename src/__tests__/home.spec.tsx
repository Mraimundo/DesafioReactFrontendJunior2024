import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../pages/Home";

describe("Home Page", () => {
  it("should render Home page correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
});
