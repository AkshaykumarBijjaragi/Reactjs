import UseLocalStorage from "./useLocalStorage";

export default function Darkmode() {
  const [currTheme, setCurrTheme] = UseLocalStorage("light");

  function toggleMode() {
    setCurrTheme(currTheme === "light" ? "dark" : "light");
  }

  return (
    <>
      <div>Darkmode is {currTheme === "light" ? "off" : "on"}</div>
      <button onClick={toggleMode}>toggle theme</button>
    </>
  );
}
