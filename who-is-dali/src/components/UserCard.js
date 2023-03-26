import {Card, Col} from 'react-bootstrap'
import styled from 'styled-components'

const StyledCard = styled(Card)`
    width: 18rem;
`;

const ImgContainer = styled.span`
    overflow: hidden;
    width: 18rem;
    height: 18rem;
`

const Img = styled(Card.Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UserCard = ({ user }) => (
    <Col>
        <StyledCard>
            <ImgContainer>
                <Img variant="top" src={user.picture}/>
            </ImgContainer>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
            </Card.Body>
        </StyledCard>
    </Col>
);

export default UserCard;