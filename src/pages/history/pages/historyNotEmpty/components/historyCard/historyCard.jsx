import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const HistoryCard = ({name, price, group_id, image}) => {
    return(
        <div className={styles.container}>
            <div className={styles.div1}>
                <div>
                    <img className={styles.image} src={image} alt={name} />
                </div>
                <div className={styles.data}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>Rp{price}</p>
                </div>
            </div>
            <div className={styles.div2}>
                <div className={styles.linkDiv}>
                    <Link className={styles.link} to={`/history/show/${group_id}`}>show more</Link>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard