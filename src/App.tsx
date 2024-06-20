import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import NoMatch from "./presentation/pages/NoMatch";
import ContactPage from "./presentation/pages/ContactPage";
import HomePage from "./presentation/pages/Home/HomePage";
import Menu from "./presentation/pages/Menu/Menu";
import Header from "./presentation/components/Header/Header";
import Footer from "./presentation/components/Footer/Footer";
import "./App.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function HomeApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}
