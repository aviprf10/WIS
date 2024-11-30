import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./routes";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider >
        <RouteComponent />
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
