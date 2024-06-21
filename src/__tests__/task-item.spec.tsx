import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskItem } from "../components/TaskItem";
import { ITask } from "../entities/Task";
import { useTasks } from "../hooks";

jest.mock("../hooks", () => ({
  useTasks: jest.fn(),
}));

describe("TaskItem", () => {
  const task: ITask = { id: "1", title: "Test Task", isDone: false };

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({
      deleteTasks: jest.fn(),
      updatedItemHandler: jest.fn(),
    });
  });

  it("should render task item", () => {
    render(<TaskItem item={task} />);
    expect(screen.getByDisplayValue("Test Task")).toBeInTheDocument();
  });

  it("should call deleteTasks when delete button is clicked", () => {
    render(<TaskItem item={task} />);
    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);
    expect(useTasks().deleteTasks).toHaveBeenCalledWith(task.id);
  });

  it("should toggle task completion when checkbox is clicked", () => {
    render(<TaskItem item={task} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(useTasks().updatedItemHandler).toHaveBeenCalledWith({
      id: task.id,
      title: task.title,
      isDone: !task.isDone,
    });
  });

  it("should mark task as done", () => {
    render(<TaskItem item={{ ...task, isDone: true }} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should mark task as not done", () => {
    render(<TaskItem item={{ ...task, isDone: false }} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
