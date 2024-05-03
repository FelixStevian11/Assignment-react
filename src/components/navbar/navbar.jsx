import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { useCartList } from "../../store/cartList"
import { useState, useEffect } from "react"

const navbar = () => {
    const cartList = useCartList((state) => state.data)
    const [cartAmount, setCartAmount] = useState(0)

    useEffect(() => {
        setCartAmount(0)
        cartList.map(data => {
            setCartAmount(state => state + data.amount)
        });
    },[cartList])

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <p className={styles.title}>THE STORE</p>
            </div>
            <div className={styles.right}>
                <Link className={styles.link} to={"/"}>Home</Link>
                <Link className={styles.link} to={"/cart"}>Cart: {cartAmount}</Link>
                <Link className={styles.link} to={"/history"} >History</Link>
            </div>
        </div>
    )
}

export default navbar