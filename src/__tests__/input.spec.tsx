import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "../components/Input";
import { useTasks } from "../hooks";

jest.mock("../hooks", () => ({
  useTasks: jest.fn(),
}));

describe("Input component", () => {
  const mockHandleAddItem = jest.fn();
  const mockHandleToggleAllDone = jest.fn();

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({
      handleAddItem: mockHandleAddItem,
      handleToggleAllDone: mockHandleToggleAllDone,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should renders the input field with placeholder", () => {
    render(<Input placeholder="What needs to be done?" />);
    const inputElement = screen.getByPlaceholderText(
      /What needs to be done\?/i
    );
    expect(inputElement).toBeInTheDocument();
  });

  it("should updates the input value when typing", () => {
    render(<Input placeholder="What needs to be done?" />);
    const inputElement = screen.getByPlaceholderText(
      /What needs to be done\?/i
    );
    fireEvent.change(inputElement, { target: { value: "Nova tarefa" } });
    expect(inputElement).toHaveValue("Nova tarefa");
  });

  test("should calls handleToggleAllDone when icon is clicked", () => {
    render(<Input placeholder="Adicionar tarefa" />);
    const iconContainer = screen.getByTestId("icon-container");

    fireEvent.click(iconContainer);

    expect(mockHandleToggleAllDone).toHaveBeenCalled();
  });
});
