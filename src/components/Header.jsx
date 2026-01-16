import { useSettings } from "../context/SettingsContext";

const text = {
  en: "Welcome",
  th: "ยินดีต้อนรับ",
};

export default function Header() {
  const { language } = useSettings();

  return <h1>{text[language]}</h1>;
}
