import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Navbarr from "./component/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/SignUp";
import Footer from "./component/Footer/Footer";
// import banner_kids from "public/assets/banner_kids.png";
// import banner_men from "public/assets/banner_mens.png";
// import banner_women from "public/assets/banner_women.png";
import Login from "./Pages/Login";
const banner_kids = "/assets/banner_kids.png";
const banner_men = "/assets/banner_mens.png";
const banner_women = "/assets/banner_women.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={banner_men} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
