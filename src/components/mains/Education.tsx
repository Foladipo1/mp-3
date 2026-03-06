import styled from "styled-components";


const EducationStyles = styled.main`
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

        .education-item
        {
                text-align: left;
                padding: 2rem 0;
                border-bottom: 1px solid #ddd;
                margin-bottom: 1.5rem;
        }
`
export default function Education() {
    return(
        <EducationStyles>
            <h2>Boston University</h2>
            <p><strong>College of Arts and Sciences | Graduate School of Arts and Sciences</strong></p>
            <p>Boston, Massachusetts | September 2022 - May 2026 (Expected)</p>

            <h3>Master of Science in Computer Science</h3>
            <p>August 2025 - May 2026 (Expected)</p>

            <h3>Bachelor of Arts in Computer Science</h3>
            <p>September 2022 - May 2026</p>
            <p><strong>Cumulative GPA:</strong> 3.66/4.0</p>
            <p><strong>Honors:</strong> Dean's List (6 semesters - Spring 2023, Fall 2023, Spring 2024, Fall 2024, Fall 2025)</p>

            <h3>Relevant Graduate Coursework</h3>
            <p>Data Science Tools & Applications, Deep Learning, Advanced Topics in Computer Science, Graduate Algorithms, Data Systems Architecture, Image & Video Computing, Object-Oriented Software Principles</p>

            <h3>Relevant Undergraduate Coursework</h3>
            <p>Machine Learning, Artificial Intelligence, Software Engineering, Distributed Systems, Foundations of Data Science, Introduction to Algorithms, Computer Systems, Probability in Computing, Full Stack Development, Survey of Computer Languages, Geometric Algorithms, Combinatorial Structures</p>

            <h3>Advanced Placement Credit</h3>
            <p>Computer Science A, English Literature & Composition, Calculus BC, Physics 1, European History</p>
        </EducationStyles>
    )
}