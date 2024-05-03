import NavBar from "../../../../components/navbar/navbar"
import { useCartList } from "../../../../store/cartList"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import CartCard from "./components/cartCard/cartCard"
import styles from "./styles.module.css"

const CartNotEmpty = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()
    const cartList = useCartList((state) => state.data)

    const buyCart = () => {
        navigate('/cart/success')
    }

    useEffect(() => {
        setTotalPrice(state => state = 0)
        cartList.map(data => {
            setTotalPrice(state => state + (data.price * data.amount))
        });
    },[cartList])

    return(
        <div>
            <NavBar/>
            <div className={styles.divContainer}>
                <div className={styles.div1}>
                    {cartList.map((data) => (
                        <CartCard name={data.name} price={data.price} id={data.id} amount={data.amount} image={data.image}/>
                    ))}
                </div>
                <div className={styles.div2}>
                    <div className={styles.price}>Rp{totalPrice}</div>
                    <button className={styles.buy} onClick={buyCart}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default CartNotEmpty