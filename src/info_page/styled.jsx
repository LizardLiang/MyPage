import styled from "styled-components";
import banner from "../images/cover.jpg";

const Main = styled.div`
    min-height: 95vh;
`;

const Banner = styled.div`
    background-image: url(${banner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;

    color: white;
	font-size: 1.5rem;
`;

export { Main, Banner };
