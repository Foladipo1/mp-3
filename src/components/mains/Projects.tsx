import './Calculator.tsx'
import Calculator from "./Calculator.tsx";
import styled from 'styled-components';

const ProjectStyled =styled.main`
    min-height: 100vh /* viewport height and removes whitespace at the bottom */;
    width: 70%;
    text-align: center;
    padding: 5vw; /* responsive margins to shrink with viewport*/
    font-size: calc(2px + 1.5vw);
    background-color: #ffffff;

    h2 {
        font-size: calc(18px + 1vw);
        font-weight: 700;
        margin-bottom: 2rem;
        color: #2c3e50;
        border-bottom: 2px solid #c0392b;
        padding-bottom: 0.5rem;
    }

    h3 {
        font-size: calc(14px + 0.8vw);
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }

    h4 {
        font-size: calc(12px + 0.6vw);
        font-weight: 600;
        color: #34495e;
    }

    p {
        font-size: calc(12px + 0.4vw);
        line-height: 1.6;
        margin-bottom: 0.8rem;
        color: #34495e;
    }

    p strong {
        font-weight: 700;
        color: #2c3e50;
    }

    p em {
        color: #7f8c8d;
        font-style: italic;
    }

    ul {
        margin-left: 2rem;
        margin-bottom: 1rem;
    }

    li {
        font-size: calc(11px + 0.4vw);
        line-height: 1.7;
        margin-bottom: 0.5rem;
        color: #34495e;
    }

    a {
        color: #c0392b;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    h3 + p {
        margin-top: 0.3rem;
    }

    hr {
        border: none;
        border-top: 1px solid #bdc3c7;
        margin: 3rem 0;
    }


    @media (max-width: 999px) {
            width: 100%;
    }
    @media (max-width: 749px) {
        width: 100%;

        .project-item{
            padding: 1.5rem 0;}

        h2 {
            font-size: calc(16px + 1vw);
        }

        ul {
            margin-left: 1.5rem;
        }
    }

    .project-item
    {
        text-align: left;
        padding: 2rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.5rem;
    }
`
export default function Projects (){
    return (
        <ProjectStyled>
            <h2>Projects</h2>

            <div className="project-item">
                <h3>EPL Match Outcome Predictor with Dual-Task Transformer</h3>
                <p><strong>Technologies:</strong> PyTorch, Transformers, Pandas, scikit-learn</p>
                <p><em>2025</em> | <a href="https://github.com/Foladipo1" target="_blank">GitHub</a></p>
                <ul>
                    <li>Built transformer and MLP models for match outcome prediction and goal differential regression
                        on 3,420 English Premier League matches
                    </li>
                    <li>Achieved 57% test accuracy on match outcome classification, exceeding published benchmarks for
                        football prediction
                    </li>
                    <li>Designed temporal feature encoding with 20-match rolling team history incorporating advanced
                        football metrics including expected goals (xG), passes per defensive action (PPDA), and deep
                        progressions
                    </li>
                    <li>Conducted comprehensive architecture comparison study showing MLP outperformed transformer by
                        11% accuracy, attributed to limited dataset size and feature engineering quality
                    </li>
                </ul>
            </div>

            <div className="project-item">
                <h3>FootyLiveliness - Premier League Match Excitement Predictor</h3>
                <p><strong>Technologies:</strong> Python, Machine Learning, Data Analysis</p>
                <p><em>2024</em> | <a href="https://github.com/James-Njoroge/FootyLiveliness" target="_blank">GitHub</a>
                </p>
                <ul>
                    <li>Collaborative project predicting match excitement levels based on historical Premier League
                        data
                    </li>
                    <li>Implemented machine learning models to analyze match statistics and predict entertainment
                        value
                    </li>
                    <li>Contributed to feature engineering pipeline incorporating team form, historical matchups, and
                        playing styles
                    </li>
                </ul>
            </div>

            <div className="project-item">
                <h3>To-Do Calendar Application</h3>
                <p><strong>Technologies:</strong> JavaScript, React, Node.js, Express, MongoDB</p>
                <p><em>CS 411 Software Engineering | 2024</em> | <a
                    href="https://github.com/CS-411-To-Do-Calendar/to-do-list" target="_blank">GitHub</a></p>
                <ul>
                    <li>Collaborative full-stack web application for task management with calendar integration</li>
                    <li>Implemented RESTful API backend with user authentication and database persistence</li>
                    <li>Developed responsive React frontend with drag-and-drop task scheduling interface</li>
                    <li>Applied agile development methodology with sprint planning and code reviews</li>
                </ul>
            </div>

            <div className="project-item">
                <h3>Mini Facebook — Social Networking Web App</h3>
                <p><strong>Technologies:</strong> Python, Django, HTML/CSS, SQLite</p>
                <p><em>CS 412 Full Stack Development | 2025</em></p>
                <ul>
                    <li>Built a Facebook-style social networking application with user authentication, profiles, and
                        friend relationships
                    </li>
                    <li>Implemented status posting with multi-image uploads and timestamped content using Django models
                        and forms
                    </li>
                    <li>Developed personalized news feed aggregating posts from friends with full CRUD functionality
                    </li>
                    <li>Deployed the application on a university-hosted server for live use during the course</li>
                </ul>
            </div>

            <div className="project-item">
                <h3>Footy — Pickup Games & Team Management Platform (Solo Project)</h3>
                <p><strong>Technologies:</strong> Python, Django, HTML/CSS, SQLite</p>
                <p><em>CS 412 Full Stack Development | 2025</em></p>
                <ul>
                    <li>Designed and built a solo, full-stack soccer community platform for player profiles, pickup
                        games, and team management
                    </li>
                    <li>Implemented pickup game creation, join/leave functionality, team invitations, and match
                        scheduling with role-based permissions
                    </li>
                    <li>Added player statistics, profile comments, and video uploads to support richer user
                        interaction
                    </li>
                    <li>Enabled one-click navigation to game locations using address-based Google Maps links and
                        deployed on a university server
                    </li>
                </ul>
            </div>


            {/*// <!-- Calculator section -->*/}
            <h2>JavaScript Calculator</h2>
            <p>An interactive calculator demonstrating JavaScript functionality and DOM manipulation.</p>
           <Calculator/>
        </ProjectStyled>
    )
}