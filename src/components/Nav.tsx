import { Link } from "react-router";
import styled from "styled-components"

const NavStyled = styled.nav`
    width: 30%;
    background-color: #34495e;

    
    ul {
        padding-left: 0;
        list-style: none;
    }
    
    li {
        border: none;
        margin: 5% auto;
        width: 80%;
        text-align: center;
    }
    
    a {
        color: #ecf0f1;
        font-size: calc(5px + 1.5vw);
        text-decoration: none;
        display: block;
        padding: 10px;
    }
    
    @media (max-width: 740px)
    {
        width: 100%;
        
        ul {
            display: flex;
            flex-direction: row; /* Nav items horizontal */
            justify-content: flex-start; /* */
            flex-wrap: wrap;
        }

        li {
            width: auto;
            margin: 2%;
        }
    }
`
export default function Nav(){
    return(
        <NavStyled>
            <ul>
                <li><Link to="/index.html">Home</Link></li>
                <li><Link to="/skills.html">Skills and Achievements</Link></li>
                <li><Link to="/projects.html">Projects</Link></li>
                <li><Link to="/research.html">Research</Link></li>
                <li><Link to="/education.html">Education</Link></li>
                <li><Link to="/experience.html">Experience</Link></li>
                <li><Link to="/hobbies.html">Hobbies</Link></li>
            </ul>
        </NavStyled>
    )
}