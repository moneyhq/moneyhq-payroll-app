import "./ToggleButton.scss";

export default function ToggleButton({ theme, toggleTheme }) {

  return (
    <div className="toggle" onClick={toggleTheme} data-theme={theme}>
      <input type="checkbox" className="toggle__checkbox" id="toggle" />
      <label htmlFor="toggle" className="toggle__label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="toggle__ball"></span>
      </label>
    </div>
  );
}
