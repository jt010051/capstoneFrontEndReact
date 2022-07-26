import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import Menu from "./Menu"
const Unauthorized = () => {

    const navigate = useNavigate();
const {auth} = useAuth();
    const goBack = () => navigate(-1);
    return (
        <>
        <Menu/>
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
        </>
    )
}

export default Unauthorized