import { TaskProvider } from "./task-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return <TaskProvider>{children}</TaskProvider>;
}
