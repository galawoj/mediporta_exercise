import "./App.css";
import Tags from "./components/Tags";
import AppContextProvider from "./store/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Tags />
    </AppContextProvider>
  );
}

export default App;
