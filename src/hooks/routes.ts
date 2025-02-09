import {useNavigate} from "react-router";


export function useRoutes() {
    const navigate = useNavigate();

    function gotoHome(){
        navigate("/")
    }

    function gotoLogIn(){
        navigate("/login")
    }

    function gotoSignUp(){
        navigate("/signup")
    }

    function gotoDashboard(fireba_user_id: string){
        navigate(`/dashboard/${fireba_user_id}`)
    }


    return {
        gotoHome, gotoLogIn, gotoSignUp, gotoDashboard
    }
}