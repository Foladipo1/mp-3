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

const ExperienceItem = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid #e8e4df;
  &:last-child { border-bottom: none; }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 2px;

  h3 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0;
  }

  span {
    font-size: 0.8rem;
    color: #6b6b6b;
    white-space: nowrap;
  }
`;

const Meta = styled.p`
  font-size: 0.8rem;
  color: #6b6b6b;
  margin: 0 0 12px;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 16px;

  li {
    font-size: 0.85rem;
    color: #3a3a3a;
    line-height: 1.7;
    margin-bottom: 4px;
  }
`;

export default function Experience() {
    return (
        <Wrapper>
            <SectionTitle>Experience</SectionTitle>

            <ExperienceItem>
                <ItemHeader>
                    <h3>Machine Learning Intern</h3>
                    <span>Summer 2025</span>
                </ItemHeader>
                <Meta>Foremost Radiology Consultant Ltd. · Lagos, Nigeria</Meta>
                <BulletList>
                    <li>Built a batch inference pipeline in PyTorch to benchmark 3 CNN architectures on a ~1,000-image chest scan dataset for early tuberculosis detection, automating metric collection and edge-case documentation.</li>
                    <li>Collaborated with radiologists to define evaluation criteria and interpret model failure modes across imaging modalities.</li>
                </BulletList>
            </ExperienceItem>

            <ExperienceItem>
                <ItemHeader>
                    <h3>Course Assistant — Deep Learning, Systems & Algorithms</h3>
                    <span>2023 – Present</span>
                </ItemHeader>
                <Meta>Boston University · Boston, MA</Meta>
                <BulletList>
                    <li>Supported 200+ students across 3 courses over 5 semesters; ran exam review sessions and one-on-one midterm prep.</li>
                    <li>Debugged student PyTorch and C code hands-on, covering CNNs, RNNs, Transformers, backpropagation, and algorithm design.</li>
                    <li>Graded assignments and contributed occasional updates to course materials.</li>
                </BulletList>
            </ExperienceItem>

            <ExperienceItem>
                <ItemHeader>
                    <h3>Independent Technology Consultant</h3>
                    <span>2021 – 2023</span>
                </ItemHeader>
                <Meta>Freelance · Remote</Meta>
                <BulletList>
                    <li>Taught coding fundamentals to younger students using Python and JavaScript through one-on-one sessions.</li>
                    <li>Educated clients on AI safety, cybersecurity best practices, and general IT troubleshooting.</li>
                </BulletList>
            </ExperienceItem>

        </Wrapper>
    );
}