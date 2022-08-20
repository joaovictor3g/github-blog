import { ThemeProvider } from "styled-components";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
