// import MainBody from "../MainBody/MainBody";
import MainNav from "../MainNav/MainNav";
import TopNav from "../TopNav/TopNav";
import "./Body.scss";

export default function Body({ body, theme, toggleTheme }) {
  return (
    <div className="main" data-theme={theme}>
      <MainNav theme={theme} />
      <main className="main-body">
        <TopNav theme={theme} toggleTheme={toggleTheme} />
        {body}
      </main>
    </div>
  );
}
