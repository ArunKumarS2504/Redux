import {useSelector} from "react-redux"

function Contact  (props) {
    const name = useSelector((state) => state.baseVal.name)
    return(
        <div>
            contact us
            <p>Name: {name}</p>
        </div>
    )
}
export default Contact;