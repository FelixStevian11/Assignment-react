import CartNotEmpty from "./pages/cartNotEmpty/cartNotEmpty"
import CartEmpty from "./pages/cartEmpty/cartEmpty"

import { useCartList } from "../../store/cartList"

const cart = () => {
    const cartList = useCartList((state) => state.data)

    if (cartList.length > 0) {
        return(
            <CartNotEmpty/>
        )
    } else {
        return(
            <CartEmpty/>
        )
    }
}

export default cart