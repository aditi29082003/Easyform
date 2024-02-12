import Home from "./components/Home/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Easyform1 from "./components/Easyform1/Easyform1";
import { useRoutes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp"
import Easyform2 from "./components/Easyform2/Easyform2";
import Easyformstep1 from "./components/Easyformstep1/Easyformstep1"
import Sendscreen from "./components/SendScreen/Sendscreen";
import ContactResponseList from "./components/ContactResponselist/ContactResponseList";
import ContactResponseList1 from "./components/ContactResponseList1/ContactResponseList1";
function App() {
    let routeElements = useRoutes([
        {
            path: "/",
            children: [
                {
                    index: true,
                    element:<Home/>
                },
            
                {
                    path: 'signin',
                    element: <SignIn />
                },
                {
                    path: "signup",
                    element: <SignUp />
                }
            ]
        }
     ])
    return (
            <>   
            <Navbar/>         
            <Easyform1/>  
            <Easyform2/> 
            <Easyformstep1/>
            <Sendscreen/>         
           <ContactResponseList/>
           <ContactResponseList1/>
           {routeElements}
           </>        
    )
}
export default App;

