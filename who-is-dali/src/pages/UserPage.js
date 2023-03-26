import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Row from "react-bootstrap/Row"
import {Col} from "react-bootstrap";

const UserContainer = styled(Row)`
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
`

const UserImage = styled.img`
    height: 20rem;
    object-fit: contain;
`

const BasicInfo = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`

const UserPage = () => {

    const [user, setUser] = useState("")
    const navigate = useNavigate();


    const {userName} = useParams();

    useEffect(() => {
        document.title = userName;
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${encodeURIComponent(userName)}`);
                setUser(response.data);
            } catch (e) {
                navigate("/user");
            }
        };
        getUser();
    }, [userName])

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
                                user[e] ? <li className="ms-md-4" key={i}>{user[e]}</li> : null
                            ))
                        }</BasicInfo>
                    </li>
                </BasicInfo>
            </Col>
        </UserContainer>
    );
};

export default UserPage;