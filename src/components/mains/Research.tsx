import styled  from "styled-components";

const ResearchStyled =styled.main`
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

        .research-item{
            padding: 1.5rem 0;}

        h2 {
            font-size: calc(16px + 1vw);
        }

        ul {
            margin-left: 1.5rem;
        }
    }

    .research-item
    {
        text-align: left;
        padding: 2rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1.5rem;
    }
`
export default function Research(){
    return (
        <ResearchStyled>
            <h2>Research Projects</h2>

            <div className="research-item">
                <h3>Cross-Modal Interpretability Study: Vision & NLP</h3>
                <p><strong>Technologies:</strong> PyTorch, Grad-CAM, BERT, LIME, ResNet-50</p>
                <p><em>2025</em></p>
                <ul>
                    <li>Evaluated gradient-based attribution methods and LIME on BERT sentiment analysis across multiple
                        datasets
                    </li>
                    <li>Tested 4 saliency methods (Grad-CAM, Integrated Gradients, Saliency Maps, Occlusion) on
                        ResNet-50 image recognition tasks
                    </li>
                    <li>Designed and conducted human evaluation studies with 30 text annotators and 20 vision
                        participants to measure alignment between model explanations and human reasoning
                    </li>
                    <li>Found gradient methods achieved 5× higher human alignment than LIME in text tasks; CAM methods
                        substantially outperformed Integrated Gradients in vision tasks
                    </li>
                    <li>Contributed to understanding which interpretability methods best match human intuition across
                        modalities
                    </li>
                </ul>
            </div>

            <div className="research-item">
                <h3>Medical Imaging Classification with Deep Learning</h3>
                <p><strong>Foremost Radiology Consultant Limited</strong> | Lagos, Nigeria</p>
                <p><strong>Technologies:</strong> PyTorch, CNNs, Transfer Learning</p>
                <p><em>Summer 2025</em></p>
                <ul>
                    <li>Evaluated multiple CNN architectures (ResNet, DenseNet, EfficientNet) for medical scan
                        classification across different imaging modalities
                    </li>
                    <li>Conducted comparative accuracy analysis identifying performance gaps between architectures on
                        various scan types
                    </li>
                    <li>Documented model behavior on edge cases and challenging clinical scenarios for radiologist
                        review
                    </li>
                    <li>Collaborated with radiologists to define clinically-relevant evaluation criteria and interpret
                        model predictions in medical context
                    </li>
                </ul>
            </div>
        </ResearchStyled>
    )
}