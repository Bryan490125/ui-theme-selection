import { useSettings } from "../context/SettingsContext";

const messages = {
  en: "This is your preference preview.",
  th: "นี่คือหน้าตัวอย่างการตั้งค่า",
};

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div>
      <h3>Preview</h3>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
      <p>{messages[language]}</p>
    </div>
  );
}
