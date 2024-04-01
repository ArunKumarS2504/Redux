import {useNavigate,useLocation} from "react-router-dom";
import { TOKEN } from "./AppConstrains";

const ProducedRouter = ({children}) =>{
          

    let location = useLocation();
    let token = localStorage.getItem(TOKEN)
    if (!token){
        return <Navigate to="/" state={{ from: location }} />
        // or simply Link to. The above uses redirection concept

    }
    return children;
}
export default ProducedRouter;