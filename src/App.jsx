import "./styles/App.scss";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home/Home";
import Payroll from "./pages/Payroll/Payroll";
import Employees from "./pages/Employees/Employees";
import Reports from "./pages/Reports/Reports";
import Body from "./components/Body/Body";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Payrun from "./pages/Payrun/Payrun";
import PayrunReview from "./components/PayrunReview/PayrunReview";
import PayrunConfirm from "./components/PayrunConfirm/PayrunConfirm";
import PayrunSuccess from "./components/PayrunSuccess/PayrunSuccess";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./components/Modal/Modal";
import AddEmployeesModal from "./components/AddEmployeesModal/AddEmployeesModal";
// import useLocalStorage from "use-local-storage";

export default function App() {
  // const [theme, setTheme] = useLocalStorage("theme", "light");

  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body body={<Home />} />} />
          <Route path="/payroll" element={<Body body={<Payroll />} />} />
          <Route path="/payroll/run" element={<Body body={<Payrun />} />} />
          <Route
            path="/payroll/review"
            element={<Body body={<PayrunReview />} />}
          />
          <Route
            path="/payroll/confirm"
            element={<Body body={<PayrunConfirm />} />}
          />
          <Route
            path="/payroll/success"
            element={<Body body={<PayrunSuccess />} />}
          />
          <Route path="/employees" element={<Body body={<Employees />} />} />
          <Route
            path="/employees/:id"
            element={<Body body={<Employees />} />}
          />
          <Route path="/reports" element={<Body body={<Reports />} />} />
        </Routes>
      </BrowserRouter>

      {/* Modal components */}
      <Modal modalId="addEmployeesModal">
        <AddEmployeesModal />
      </Modal>
    </ModalProvider>
  );
}
