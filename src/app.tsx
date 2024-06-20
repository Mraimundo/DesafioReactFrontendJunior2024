import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";

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
        <Toaster richColors />
      </AppProvider>
    </ThemeProvider>
  );
}
