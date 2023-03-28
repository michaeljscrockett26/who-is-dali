import axios from "axios";
import {useEffect, useState} from "react";
import UserCard from "../components/UserCard";
import {Col, Container, Row} from "react-bootstrap";

const HomePage = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        document.title = "Who is DALI?";
        const getUsers = async () => {
            const response = await axios.get("http://localhost:8080/api/users");
            return response.data;
        };
        getUsers().then(setUsers);
    }, [])

    return (
        <>
            <h1>DALI Members</h1>
            <Container>
                <Row className={"my-5"}>
                    {users.map(user => <Col key={user.name} align="center" className="my-2"><UserCard user={user}/></Col>)}
                </Row>
            </Container>
        </>
    );
}

export default HomePage;