import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Error404Page from "./pages/Error404Page";

export default (
    <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/user/:userName" element={<UserPage/>}/>
        <Route path="*" element={<Error404Page/>}/>
    </Routes>
);