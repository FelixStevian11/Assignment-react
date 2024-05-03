import Navbar from "../../../../components/navbar/navbar"
import styles from "./styles.module.css"

const HistoryEmpty = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <p className={styles.empty}>HISTORY IS EMPTY</p>
            </div>
        </div>
    )
}

export default HistoryEmpty