import styled from "styled-components";

const SkillsWrapper = styled.main`
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

        .skills-section {
            padding: 1.5rem 0;}

        h2 {
            font-size: calc(16px + 1vw);
        }

        ul {
            margin-left: 1.5rem;
        }
    }
    
    .skills-section
   {
        text-align: left;
        padding: 2rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.5rem;
    }

    .achievement-item {
        text-align: left;
        padding: 2rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.5rem;
    }
    
`
export default function Skills(){
    return (
        <SkillsWrapper>
            <h2>Technical Skills</h2>

            <div className="skills-section">
                <h3>Programming Languages</h3>
                <p>Python, Java, C, JavaScript, SQL</p>
            </div>

            <div className="skills-section">
                <h3>Deep Learning & AI</h3>
                <p>PyTorch, TensorFlow, HuggingFace Transformers, CNNs, RNNs, Transformers, GANs, Attention Mechanisms,
                    Transfer Learning, Neural Architecture Design</p>
            </div>

            <div className="skills-section">
                <h3>Machine Learning & Data Science</h3>
                <p>XGBoost, LightGBM, scikit-learn, Pandas, NumPy, Feature Engineering, Hyperparameter Tuning, Model
                    Evaluation, Statistical Learning</p>
            </div>

            <div className="skills-section">
                <h3>Computer Vision & NLP</h3>
                <p>Image Classification, Object Detection, Grad-CAM, Saliency Methods, BERT, Sentiment Analysis, Text
                    Classification, LIME</p>
            </div>

            <div className="skills-section">
                <h3>Software Engineering & Systems</h3>
                <p>Object-Oriented Design, Distributed Systems, Full Stack Development, RESTful APIs, Database
                    Architecture, Algorithm Design, Data Structures</p>
            </div>

            <div className="skills-section">
                <h3>Tools & Platforms</h3>
                <p>Git, GitHub, Jupyter Notebooks, Google Cloud Platform, Firebase, Matplotlib, Seaborn, LaTeX</p>
            </div>

            <div className="skills-section">
                <h3>Languages</h3>
                <p>English (Native), French (Intermediate - 4 semesters)</p>
            </div>

            <h2>Achievements & Honors</h2>

            <div className="achievement-item">
                <h3>Dean's List Recognition</h3>
                <p><strong>Boston University College of Arts and Sciences</strong></p>
                <p>Achieved Dean's List honors for 6 semesters: Spring 2023, Fall 2023, Spring 2024, Fall 2024, Summer
                    2025, Fall 2025</p>
            </div>

            <div className="achievement-item">
                <h3>Hackathon Placements</h3>
                <p><strong>Boston University</strong> | Sophomore Year</p>
                <p>3rd Place and 2nd Place finishes in university hackathon competitions</p>
            </div>

            <div className="achievement-item">
                <h3>Cambridge Outstanding Learner Awards</h3>
                <p><strong>Top in Nigeria</strong> | November 2019</p>
                <p>Achieved highest marks in Nigeria for three Cambridge O-Level subjects:</p>
                <ul>
                    <li>Economics - Top in Nigeria</li>
                    <li>Geography - Top in Nigeria</li>
                    <li>Business Studies - Top in Nigeria</li>
                </ul>
            </div>
        </SkillsWrapper>
    )
}