import { useHistoryList } from "../../store/historyList"
import HistoryNotEmpty from "./pages/historyNotEmpty/HistoryNotEmpty"
import HistoryEmpty from "./pages/historyEmpty/historyEmpty"

const History = () => {
    const historyList = useHistoryList(state => state.data)

    if (historyList.length > 0) {
        return (
            <HistoryNotEmpty/>
        )
    } else {
        return (
            <HistoryEmpty/>
        )
    }
}

export default History