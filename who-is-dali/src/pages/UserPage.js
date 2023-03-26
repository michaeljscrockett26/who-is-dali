import {useParams} from "react-router";
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
    const {userName} = useParams();

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(`http://localhost:8080/api/users/${encodeURIComponent(userName)}`);
            setUser(response.data);
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
    return (
        <UserContainer>
            <Col className="text-end"><UserImage src={user.picture}/></Col>
            <Col className="text-start">
                <h1>{user.name}</h1>
                <BasicInfo>
                    <li><strong>Role:</strong> {user.role}</li>
                    <li><strong>Year:</strong> {user.year}</li>
                    <li><strong>Major:</strong> {user.major}</li>
                    <li>
                        <strong>Race/Ethnicity:</strong>
                        <ul>{
                            eth_choices.map((e, i) => (
                                user[e] ? <li key={i}>{user[e]}</li> : null
                            ))
                        }</ul>
                    </li>
                </BasicInfo>
            </Col>
        </UserContainer>
    );
};

export default UserPage;