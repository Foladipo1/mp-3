import styled from 'styled-components';

const HobbyStyle =styled.main`
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

        .hobby-item{
            padding: 1.5rem 0;}

        h2 {
            font-size: calc(16px + 1vw);
        }

        ul {
            margin-left: 1.5rem;
        }
    }

    .hobby-item
    {
        text-align: left;
        padding: 2rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.5rem;
    }
`

export default function Hobbies(){
    return (
        <HobbyStyle>
            <h2>Personal Interests & Hobbies</h2>

            <div className="hobby-item">
                <h3>Football (Soccer)</h3>
                <p>Passionate about the beautiful game both on and off the pitch. I regularly play pickup games and
                    follow the Premier League closely, which inspired my EPL match prediction projects. Football
                    combines my love for strategy, teamwork, and competition.</p>
            </div>

            <div className="hobby-item">
                <h3>Gaming</h3>
                <p>I enjoy both competitive and casual gaming as a way to unwind and challenge myself. Gaming offers a
                    unique blend of strategy, problem-solving, and entertainment that keeps me engaged during my
                    downtime.</p>
            </div>

            <div className="hobby-item">
                <h3>Fitness & Outdoor Activities</h3>
                <p>I maintain an active lifestyle through regular gym sessions, cycling, and walks. Staying physically
                    active helps me stay mentally sharp and provides a healthy balance to the hours spent coding and
                    researching.</p>
            </div>


        </HobbyStyle>
    )
}