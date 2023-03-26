import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

export default (
    <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/:userName" element={<UserPage/>}/>
    </Routes>
);