import Navbar from "../../../../components/navbar/navbar"
import { useHistoryList } from "../../../../store/historyList"
import HistoryCard from "./components/historyCard/historyCard"
import styles from "./styles.module.css"


const HistoryNotEmpty = () => {
    const historyList = useHistoryList(state => state.data)

    return(
        <div>
            <Navbar/>
            <div className={styles.container}>
            {
                historyList.map((element) => {
                    if (element.mainItem === true) {
                   return ( <HistoryCard name={element.name} price={element.price} group_id={element.group_id} image={element.image}/> )
                    }
                })
            }
            </div>
        </div>
    )
}

export default HistoryNotEmpty