import {Link} from "react-router";
import styled from "styled-components";

const FooterStyled= styled.footer`
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    padding: 2%;`
export default function Footer(){


    return (
        <FooterStyled>
            <p>  All Rights Reserved by Fola Oladipo <Link to="">Credits</Link> </p>
        </FooterStyled>
    )
}