import { render, screen } from "@testing-library/react";
import { Loader } from "../components/Loader";

describe("Loader component", () => {
  it("should not render anything when isLoading is false", () => {
    render(<Loader isLoading={false} />);
    expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
  });

  it("should render the overlay and spinner when isLoading is true", () => {
    render(<Loader isLoading={true} />);
    expect(screen.getByTestId("overlay")).toBeInTheDocument();
  });
});
