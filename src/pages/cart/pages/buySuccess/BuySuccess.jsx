import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCartList } from "../../../../store/cartList"
import { useHistoryList } from "../../../../store/historyList"
import styles from "./styles.module.css"

const BuySuccess = () => {
    const navigate = useNavigate()
    const cartList = useCartList(state => state.data)
    const deleteCartList = useCartList(state => state.deleteData)
    const addHistoryList = useHistoryList(state => state.addData)

    useEffect(() => {
        cartList.forEach(element => {
            addHistoryList(element.name, element.price, element.amount, element.mainItem, element.image)
        });
        deleteCartList()
        setTimeout(() => {
            navigate("/cart")
        }, 2000)
    }, [])

    return(
        <div>
            <p className={styles.success}>CHECKOUT SUCCESSFULL</p>
        </div>
    )
}

export default BuySuccess