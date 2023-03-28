import styled from "styled-components";
import Card from "react-bootstrap/Card";


export const StyledCard = styled(Card)`
    width: 18rem;
    text-align: left;
`;

export const ImgContainer = styled.span`
    overflow: hidden;
    width: 18rem;
    height: 18rem;
`;

export const Img = styled(Card.Img)`
  width: 100%;
  height: 18rem;
  object-fit: cover;
`;
