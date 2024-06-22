import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { AppProvider } from "./contexts";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Home />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  );
}
