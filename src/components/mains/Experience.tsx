import styled from 'styled-components';

const ExperienceStyled = styled.main`
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
        main {
            width: 100%;
        }
        
    }
    @media (max-width: 749px) {
        width: 100%;

        .experience-item{
            padding: 1.5rem 0;}

        h2 {
            font-size: calc(16px + 1vw);
        }

        ul {
            margin-left: 1.5rem;
        }
    }
    
    .experience-item
   {
        text-align: left;
        padding: 2rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.5rem;
    }
    
    
`
export default function Experience() {
    return (
        <ExperienceStyled>
            <h2>Professional Experience</h2>

            <div className="experience-item">
                <h3>Machine Learning Intern</h3>
                <p><strong>Foremost Radiology Consultant Limited</strong> | Lagos, Nigeria</p>
                <p><em>Summer 2025</em></p>
                <ul>
                    <li>Evaluated multiple CNN architectures for medical scan classification, analyzing model
                        performance across different imaging modalities and scan types
                    </li>
                    <li>Conducted comparative accuracy analysis using PyTorch, identifying performance gaps and
                        documenting model behavior on edge cases for clinical review
                    </li>
                    <li>Collaborated with radiologists to define evaluation criteria and interpret model predictions in
                        clinical context
                    </li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Course Assistant — Algorithms & Machine Learning</h3>
                <p><strong>Boston University</strong> | Boston, MA</p>
                <p><em>2023 – Present</em></p>
                <ul>
                    <li>Led office hours and lab sessions for 200+ students, explaining modern deep learning
                        architectures including CNNs, RNNs, Transformers, and GANs
                    </li>
                    <li>Simplified complex concepts like backpropagation and optimization techniques using analogies and
                        visual demonstrations
                    </li>
                    <li>Debugged PyTorch implementations and reviewed student projects on neural network training,
                        hyperparameter tuning, and algorithmic problem-solving
                    </li>
                </ul>
            </div>

            <div className="experience-item">
                <h3>Independent Technology Consultant</h3>
                <p><strong>Freelance</strong> | Remote</p>
                <p><em>2021 – 2023</em></p>
                <ul>
                    <li>Provided one-on-one and at-home instruction teaching coding fundamentals to younger students
                        using Python and JavaScript
                    </li>
                    <li>Educated older clients on AI safety, cybersecurity best practices, and general IT
                        troubleshooting
                    </li>
                    <li>Delivered personalized technical support including device setup, error resolution, and software
                        training
                    </li>
                </ul>
            </div>
        </ExperienceStyled>
    )
}