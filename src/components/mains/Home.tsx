import styled from 'styled-components';

const HomeWrapper = styled.main`
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

        img {
            max-width: 250px;
        }

        h2 {
            font-size: calc(16px + 1vw);
        }

        ul {
            margin-left: 1.5rem;
        }
        h4 {
            text-align: center;
        }
    }

    img {
        display: block;
        margin: 2rem auto;
        max-width: 350px;
        width: 80%;
        border-radius: 50%; /* Makes it circular */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border: 4px solid #34495e;
    }

    h4 {
        font-size: calc(13px + 0.5vw);
        line-height: 1.8;
        color: #34495e;
        font-weight: 400;
        margin: 2rem 0;
        text-align: left;
    }

    .welcome-section {
        text-align: center;
        margin-bottom: 2rem;
    }

    .welcome-section h2 {
        font-size: calc(20px + 1.2vw);
        color: #2c3e50;
        margin-bottom: 1rem;
    }
`
export default function Home(){
    return (
        <HomeWrapper>
            <img alt="Profile Picture" src="../../../public/profile.png"/>
            <h4>Pursuing BA/MS in Computer Science and AI at Boston University (May 2026) with hands-on experience in
                deep learning,
                model interpretability, and healthcare ML. Implemented transformer architectures for temporal
                prediction, conducted
                human evaluation studies for saliency methods, and benchmarked CNN models for medical imaging
                classification. Course
                assistant for 200+ students in algorithms and ML.
            </h4>
        </HomeWrapper>
    )
}