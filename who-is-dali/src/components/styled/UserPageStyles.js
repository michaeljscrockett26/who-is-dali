import styled from "styled-components";
import Row from "react-bootstrap/Row";

export const UserContainer = styled(Row)`
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
`;

export const UserImage = styled.img`
    height: 20rem;
    object-fit: contain;
`;

export const BasicInfo = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;