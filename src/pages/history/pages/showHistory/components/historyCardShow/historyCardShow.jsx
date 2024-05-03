import styles from "./styles.module.css"

const HistoryCardShow = ({name, price, amount, image}) => {
    return (
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
                <p className={styles.amount}>x{amount}</p>
            </div>
        </div>
    )
}

export default HistoryCardShow