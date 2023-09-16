import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./modules/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import Checkout from "./modules/Checkout";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<div className="h-[55vh] text-4xl flex justify-center items-center">Contact Us</div>}/>
        <Route path="/about" element={<div className="h-[55vh] text-4xl flex justify-center items-center">About Us</div>}/>
        <Route path="*" element={<div className="h-[55vh] text-4xl flex justify-center items-center">404!</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
