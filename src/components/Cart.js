import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./CartSlice";

const Cart =() =>{
    
    const cartItems =  useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold"></h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems}/>
            {cartItems.length===0 && <h1>Cart is empty. Add items to the cart!</h1>}
        </div>
    </div>
}

export default Cart;