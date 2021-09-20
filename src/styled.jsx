import styled from "styled-components";

const Header = styled.div`
    height: 96px;
    width: 100vw;

    display: flex;

    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.5);

    transition: all 0.5s linear;

    padding: 0 20px;

    @media (min-width: 1173px) {
        padding: 0 calc((100% - 1132px) / 2);
    }

    div {
        height: 100%;
    }

    /* The first div in Header needs to grow */
    div:nth-child(1) {
        flex-grow: 1;
    }

    p {
        margin: 0;
    }

    .Title {
        font-size: 2rem;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .Link {
        height: 100%;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }
`;

const Main = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background-color: #222222;

    color: #ff8b03;
`;

export { Main, Header };
