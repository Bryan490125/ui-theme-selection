import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel() {
  const {
    theme,
    language,
    setTheme,
    setLanguage,
    resetSettings,
  } = useSettings();

  return (
    <div>
      <h2>Settings</h2>

      <div>
        <p>Theme:</p>
        <button onClick={() => setTheme("light")} disabled={theme === "light"}>
          Light
        </button>
        <button onClick={() => setTheme("dark")} disabled={theme === "dark"}>
          Dark
        </button>
      </div>

      <div>
        <p>Language:</p>
        <button onClick={() => setLanguage("en")} disabled={language === "en"}>
          EN
        </button>
        <button onClick={() => setLanguage("th")} disabled={language === "th"}>
          TH
        </button>
      </div>

      <button onClick={resetSettings}>Reset</button>
    </div>
  );
}
