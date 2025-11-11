import { useNavigate } from "react-router-dom"
import GameIdInput from "@/component/join";
export default function Game(){
    const navigate = useNavigate();
    return <div>
        <h1 className="text-2xl mt-2 text-center">game id:fsadf</h1>
        <h1 className="text-center mt-2 text-2xl">Waiting for other clients</h1>

    </div>
}