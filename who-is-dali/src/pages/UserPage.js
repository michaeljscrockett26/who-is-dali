import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {Col} from "react-bootstrap";
import { UserContainer, UserImage, BasicInfo } from "../components/styled/UserPageStyles";


const UserPage = () => {

    const [user, setUser] = useState("")
    const navigate = useNavigate();


    const {userName} = useParams();


    useEffect(() => {
        document.title = userName;
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${encodeURIComponent(userName)}`);
                return response.data;
            } catch (e) {
                navigate("/user");
            }
        };
        getUser().then(setUser);
    }, [userName, navigate])

    const eth_choices = [
        "American Indian or Alaska Native",
        "Asian",
        "Black or African American",
        "Hispanic or Latino",
        "Middle Eastern",
        "Native Hawaiian or Other Pacific Islander",
        "White",
        "Other",
    ]

    return !user ? <h1>Loading...</h1> : (
        <UserContainer>
            <Col md={6} className="text-md-end"><UserImage src={user.picture} alt="User Image"/></Col>
            <Col md={6} className="text-md-start">
                <code>@{user.username}</code>
                <h1>{user.name}</h1>
                <BasicInfo>
                    <li><strong>Role:</strong> {user.role}</li>
                    <li><strong>Year:</strong> {user.year}</li>
                    <li><strong>Major:</strong> {user.major}</li>
                    <li><strong>Favorite Shoe:</strong> {user.favoriteShoe}</li>
                    <li>
                        <strong>Race/Ethnicity:</strong>
                        <BasicInfo>{
                            eth_choices.map((e, i) => (
                                user[e] && <li className="ms-md-4" key={i}>{user[e]}</li>
                            ))
                        }</BasicInfo>
                    </li>
                </BasicInfo>
            </Col>
        </UserContainer>
    );
};

export default UserPage;