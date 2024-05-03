import NavBar from "../../components/navbar/navbar"
import ListCard from "./components/listCard/listCard"
import { useStoreList } from "../../store/storeList"
import styles from "./styles.module.css"

const index = () => {
    const storeList = useStoreList((state) => state.data)

    return(
        <div>
            <NavBar/>
            <div className={styles.cards}>
                {storeList.map((data) => (
                    <ListCard key={data.id} name={data.name} price={data.price} id={data.id} image={data.image}/>
                ))}
            </div>
        </div>
    )
}

export default index