import styled from "styled-components";

const Wrapper = styled.main`
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    max-width: 720px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e8e4df;
`;

const SkillGroup = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 0.8rem;
    font-weight: 500;
    color: #6b6b6b;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0 0 10px;
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 0.82rem;
  color: #1a1a1a;
  background: #f0eee9;
  padding: 4px 12px;
  border-radius: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e8e4df;
  margin: 36px 0;
`;

const AchievementItem = styled.div`
  margin-bottom: 28px;

  h3 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 4px;
  }

  .meta {
    font-size: 0.8rem;
    color: #6b6b6b;
    margin: 0 0 6px;
  }

  p {
    font-size: 0.85rem;
    color: #3a3a3a;
    line-height: 1.6;
    margin: 0;
  }

  ul {
    margin: 6px 0 0 16px;
    padding: 0;
    font-size: 0.85rem;
    color: #3a3a3a;
    line-height: 1.8;
  }
`;

const skills = [
    { label: "Languages", tags: ["Python", "C++", "Java", "JavaScript", "SQL"] },
    { label: "Deep Learning & AI", tags: ["PyTorch", "HuggingFace Transformers", "CNNs", "RNNs", "Transformers", "GANs", "Transfer Learning"] },
    { label: "Machine Learning & Data", tags: ["XGBoost", "LightGBM", "scikit-learn", "Pandas", "NumPy", "Feature Engineering", "Statistical Learning"] },
    { label: "Computer Vision & NLP", tags: ["Object Detection", "Grad-CAM", "YOLO", "OpenCV", "BERT", "LIME", "Saliency Methods"] },
    { label: "Tools & Platforms", tags: ["Git", "SLURM/HPC", "Jupyter", "LaTeX", "Matplotlib"] },
    { label: "Human Languages", tags: ["English (Native)", "French (Intermediate)"] },
];

export default function Skills() {
    return (
        <Wrapper>
            <SectionTitle>Technical Skills</SectionTitle>

            {skills.map(({ label, tags }) => (
                <SkillGroup key={label}>
                    <h3>{label}</h3>
                    <TagRow>
                        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                    </TagRow>
                </SkillGroup>
            ))}

            <Divider />

            <SectionTitle>Achievements</SectionTitle>

            <AchievementItem>
                <h3>Dean's List — 6 Semesters</h3>
                <p className="meta">Boston University · Spring 2023 through Fall 2025</p>
            </AchievementItem>

            <AchievementItem>
                <h3>Hackathon Placements</h3>
                <p className="meta">Boston University · Sophomore Year</p>
                <p>3rd and 2nd place finishes in university hackathon competitions.</p>
            </AchievementItem>

            <AchievementItem>
                <h3>Cambridge Outstanding Learner Awards</h3>
                <p className="meta">Top in Nigeria · November 2019</p>
                <p>Highest marks in Nigeria across three Cambridge O-Level subjects:</p>
                <ul>
                    <li>Economics</li>
                    <li>Geography</li>
                    <li>Business Studies</li>
                </ul>
            </AchievementItem>
        </Wrapper>
    );
}