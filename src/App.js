import "./App.css";
import { Main, Header } from "./styled";
import React from "react";
import Info from "./info_page/info";

const HeaderContainer = () => {
    return (
        <Header>
            <div>
                <p className="Title">Lizard's Web</p>
            </div>
            <div>
                <p className="Link">Home</p>
            </div>
        </Header>
    );
};

function App() {
    return (
        <Main>
            <HeaderContainer />
            <Info />
        </Main>
    );
}

export default App;
