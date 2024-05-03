import { useParams } from "react-router-dom"
import Navbar from "../../../../components/navbar/navbar"
import { useHistoryList } from "../../../../store/historyList"
import HistoryCardShow from "./components/historyCardShow/historyCardShow"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const ShowHistory = () => {
    const { id } = useParams()
    const historyList = useHistoryList(state => state.data)

    return (
        <div>
            <Navbar/>
            <Link className={styles.link} to={"/history"}>{"<-"}Back</Link>
            <div className={styles.container}>
                { historyList.map((element) => {
                if ( element.group_id === parseInt(id) ) {
                    return (
                        <HistoryCardShow name={element.name} price={element.price} amount={element.amount} image={element.image} />
                    )
                }             
                })}
            </div>
        </div>
    )
}

export default ShowHistory