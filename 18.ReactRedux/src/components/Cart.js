import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-2 w-6/12 mx-auto">
      <div className="flex justify-between border-b-8  border-b-amber-800 pb-4">
        <h1 className="font-bold text-3xl ">Your Cart Items</h1>
        <button
          className=" border-3 text-lg bg-yellow-500 rounded-2xl w-25  hover:scale-105 transition duration-100"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <h1 className="text-2xl font-bold m-4">Your cart is empty. Add Some Items</h1>
      ) : (
        <MenuItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
