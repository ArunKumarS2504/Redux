import {useDispatch} from "react-redux"
import {userUpdate} from "./utils/ReduxState"


const Dashboard =(props)=>{

    const dispatch = useDispatch

    const nameChange = () => {
        dispatch(userUpdate({type:"name_Change", name: "Akumar"}))
    }

    return <div>
        Dashboard
        <button onClick={()=> {nameChange()}}>nameChange </button>
    </div>
}
export default Dashboard;