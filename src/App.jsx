import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Payroll from "./pages/Payroll/Payroll";
import Employees from "./pages/Employees/Employees";
import Reports from "./pages/Reports/Reports";
import Body from "./components/Body/Body";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import useLocalStorage from "use-local-storage";

export default function App() {
  // const [theme, setTheme] = useLocalStorage("theme", "light");

  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body body={<Home />} />} />
        <Route path="/payroll" element={<Body body={<Payroll />} />} />
        <Route path="/employees" element={<Body body={<Employees />} />} />
        <Route path="/employees/:id" element={<Body body={<Employees />} />} />
        <Route path="/reports" element={<Body body={<Reports />} />} />
      </Routes>
    </BrowserRouter>
  );
}
