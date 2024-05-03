import NavBar from "../../../../components/navbar/navbar"
import styles from "./styles.module.css"

const CartEmpty = () => {
    return(
        <div>
            <NavBar/>
            <div>
                <p className={styles.empty}>CART IS EMPTY</p>
            </div>
        </div>
    )
}

export default CartEmpty