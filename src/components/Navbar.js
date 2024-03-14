import { useContext } from "react"
import { CartContext } from "../store"

export default function Navbar() {
  const [state] = useContext(CartContext);
  let sum = 0
  state.cartList.map((item) => sum += item.quantity);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">甜點蛋糕店</span>
        <button className="btn btn-outline-dark position-relative" type="submit">
          購物車
          <span className="badge rounded-pill text-bg-danger
            position-absolute top-0 start-100 translate-middle">{sum}</span>
        </button>
      </div>
    </nav>);
}