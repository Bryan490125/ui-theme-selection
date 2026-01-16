import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_SETTINGS.theme);
  const [language, setLanguage] = useState(DEFAULT_SETTINGS.language);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme || "light");
      setLanguage(parsed.language || "en");
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "app-settings",
      JSON.stringify({ theme, language })
    );
  }, [theme, language]);

  const resetSettings = () => {
    setTheme("light");
    setLanguage("en");
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
