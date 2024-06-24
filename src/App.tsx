import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
import NoMatch from "./UI/pages/NoMatch";
import ContactPage from "./UI/pages/ContactPage";
import HomePage from "./UI/pages/Home/HomePage";
import Menu from "./UI/pages/Menu/Menu";
import Header from "./UI/components/Header/Header";
import Footer from "./UI/components/Footer/Footer";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import CartSidebar from "./UI/components/CartSidebar/CartSidebar";

function Layout() {
  const iscartOpen = useSelector((state: RootState) => state.cart.isCartOpen);

  return (
    <div className="layout">
      <Header />
      <main>
        {iscartOpen && <CartSidebar />}
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
