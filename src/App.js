import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./wrapper";

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="App">
          <div className="m-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} /> 
            </Routes>
          </div>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
