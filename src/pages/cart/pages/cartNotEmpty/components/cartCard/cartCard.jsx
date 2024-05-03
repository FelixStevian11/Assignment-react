import { useCartList } from "../../../../../../store/cartList"
import { useState, useEffect } from "react"
import styles from "./styles.module.css"

const cartCard = ({name, price, id, amount, image}) => {
    const cartList = useCartList(state => state.data)
    const removeCartList = useCartList((state) => state.removeDataOnId)
    const addItemAmount = useCartList((state) => state.addAmountOnId)
    const substractItemAmount = useCartList((state) => state.substractAmountOnId)
    const updateItemAmount = useCartList(state => state.updateAmountOnId)

    const [ inputAmount, setInputAmount] = useState(amount)

    useEffect(() => {
        console.log(cartList)
        setInputAmount(amount)
    },[cartList])

    function inputChange(value) {
        updateItemAmount(id, parseInt(value))
        setInputAmount(value)
    }

    return (
        <div className={styles.card}>
            <div className={styles.div1}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.div1child}>
                    <p className={styles.name}>{name}</p>
                    <button className={styles.remove} onClick={() => {
                        removeCartList(id)
                    }}>X</button>
                </div>
            </div>
            <div className={styles.div2}>
                <p className={styles.price}>Rp{price}</p>
                <div className={styles.amountDiv}>
                    <button className={styles.sub} onClick={() => {
                        substractItemAmount(id)
                    }}>-</button>
                    <input type="number" name="amount" className={styles.amount} id="amount" value={inputAmount} onChange={e => inputChange(e.target.value)} />
                    <button className={styles.add} onClick={() => {
                        addItemAmount(id)
                    }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default cartCard