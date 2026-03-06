import styled from "styled-components";
const HeaderStyled = styled.header`
    text-align: left;
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 2% 5%;
`
export default function Header() {



    return (
        <HeaderStyled>
            <h1>Mofolaoluwarera's Resume</h1>
            <p>This is the home page of my resume website.</p>
        </HeaderStyled>
    );
}