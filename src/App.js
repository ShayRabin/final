import logo from "./logo.svg";
import "./App.css";
import "./styles/global.css";
import "./styles/variables.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Manager from "./pages/admin/manager/Manager";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import { useSelector } from "react-redux";

const AdminRoute = ({ element }) => {
  const userDetails = useSelector((state) => state.user.user);
  console.log(userDetails);
  // Check if the user is an admin, if not, redirect to home
  if (userDetails?.premission !== "admin") {
    return <Navigate to="/" />;
  }

  return element;
};

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/store" element={<Products />} />
          <Route path="/cart" element={<Cart />} />

          {/* Use AdminRoute for the /admin/manager route */}
          <Route
            path="/admin/manager"
            element={<AdminRoute element={<Manager />} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
