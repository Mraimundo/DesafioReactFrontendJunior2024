import { Filters } from "../Filters";
import { FooterContainer, SummaryTasks } from "./styles";
import { useTasks } from "../../hooks";

export function FooterTabs() {
  const { isClearCompleted, totalOutstanding } = useTasks();

  return (
    <FooterContainer>
      <SummaryTasks data-testid="summary">
        <span>
          {totalOutstanding > 1
            ? `${totalOutstanding} items left!`
            : `${totalOutstanding} item left!`}
        </span>
      </SummaryTasks>

      <Filters />

      <button onClick={isClearCompleted}>Clear completed</button>
    </FooterContainer>
  );
}
