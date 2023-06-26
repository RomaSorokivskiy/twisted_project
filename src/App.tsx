import {StoreContext} from "./store/storeContext.tsx";
import {useEffect, useState} from "react";
import {Routes,Route} from "react-router-dom";

import Layout from "./components/layout.tsx";
import WelcomePage from "./pages/welcomePage.tsx";
import DashboardPage from "./pages/dashboardPage.tsx";
import UserPage from "./pages/userPage.tsx";
import TwistedPage from "./pages/twistedPage.tsx";
import AuthPage from "./pages/authPage.tsx";
import ErrorPage from "./pages/erorrPage.tsx";
function App() {
    const Store = StoreContext();
    const [data,setData] = useState([{}])
    useEffect(() => {
        setData([{},{},{}])
    },[])
    return(
        <>
            <Store.useStoreActionContext.Provider value={data}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<WelcomePage/>}/>
                        <Route path='/dashboard' element={<DashboardPage/>}/>
                        <Route path='/profile' element={<UserPage/>}/>
                        <Route path='/twisted' element={<TwistedPage/>}/>
                    </Route>
                    <Route path='/auth' element={<AuthPage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Routes>
            </Store.useStoreActionContext.Provider>
        </>
    )
}

export default App
