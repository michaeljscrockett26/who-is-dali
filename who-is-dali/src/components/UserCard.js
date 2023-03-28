import Card from 'react-bootstrap/Card'
import {StyledCard, Img, ImgContainer} from './styled/UserCardStyles'
import CardLink from './styled/UndecoratedLink';


const UserCard = ({ user }) => {

    return (
        <StyledCard className="shadow">
            <CardLink to={`/user/${user.username}`}>
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