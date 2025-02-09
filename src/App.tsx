import {Route, Routes} from "react-router";
import HomePage from "@/pages/HomePage.tsx";
import LogIn from "@/pages/LogIn.tsx";
import SignUp from "@/pages/SignUp.tsx";
import Dashboard from "@/pages/Dashboard.tsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/dashboard/:userId" element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}

export default App;