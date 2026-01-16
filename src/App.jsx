import { useSettings } from "./context/SettingsContext";
import Header from "./components/Header";
import SettingsPanel from "./components/SettingsPanel";
import PreviewCard from "./components/PreviewCard";

function App() {
  const { theme } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <SettingsPanel />
      <PreviewCard />
    </div>
  );
}

export default App;

