import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext, cartInit, cartReducer } from "./store";


function App() {
  const reducer = useReducer(cartReducer, cartInit)
  return (
    <CartContext.Provider value={reducer}>
      <Navbar />
      <div className="container mt-4">
        {/* 外層隔線 */}
        <div className="row">
          <div className="col-md-7">
            {/* 內層隔線 */}
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;