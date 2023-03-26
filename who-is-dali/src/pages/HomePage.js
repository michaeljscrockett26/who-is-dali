import axios from "axios";
import {useEffect, useState} from "react";
import UserCard from "../components/UserCard";
import {Col, Container, Row} from "react-bootstrap";

const HomePage = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://localhost:8080/api/users");
            setUsers(response.data);
        };
        getUsers();
    }, [])

    return (
        <>
            <h1>Dali Members</h1>
            <Container>
                <Row className={"my-5"}>
                    {users.map(user => <Col key={user.name} align="center" className="my-2"><UserCard user={user}/></Col>)}
                </Row>
            </Container>
        </>
    );
}

export default HomePage;