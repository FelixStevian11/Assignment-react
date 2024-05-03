import { useCartList } from "../../../../store/cartList"
import styles from "./styles.module.css"

const ListCard = ({name, price, id, image}) => {
    const addCartList = useCartList((state) => state.addData)

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <img className={styles.image} src={image} alt={name} />
                </div>
                <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>Rp{price}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button} onClick={() => {
                    addCartList(name, price, id, image)
                }}>+Add To Cart</button>
            </div>
        </div> 
    )
}

export default ListCard