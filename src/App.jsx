import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./components/MainNav/MainNav";
import TopNav from "./components/TopNav/TopNav";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
