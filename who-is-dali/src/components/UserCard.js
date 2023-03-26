import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const StyledCard = styled(Card)`
    width: 18rem;
    text-align: left;
`;

const ImgContainer = styled.span`
    overflow: hidden;
    width: 18rem;
    height: 18rem;
`

const Img = styled(Card.Img)`
  width: 100%;
  height: 18rem;
  object-fit: cover;
`
const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const UserCard = ({ user }) => {

    return (
        <StyledCard>
            <CardLink to={`/${user.name}`}>
                <ImgContainer>
                    <Img  variant="top" src={user.picture} alt={user.name}/>
                </ImgContainer>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle>{user.role}</Card.Subtitle>
                </Card.Body>
            </CardLink>
        </StyledCard>
    );
};

export default UserCard;