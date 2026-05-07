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

const SchoolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 4px;

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
  margin: 0 0 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e8e4df;
  margin: 24px 0;
`;

const CourseSection = styled.div`
  margin-bottom: 20px;

  h4 {
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
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 0.78rem;
  color: #1a1a1a;
  background: #f0eee9;
  padding: 3px 10px;
  border-radius: 20px;
`;

const HonorRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  span.label {
    font-size: 0.8rem;
    color: #6b6b6b;
    min-width: 80px;
  }

  span.value {
    font-size: 0.85rem;
    color: #1a1a1a;
  }
`;

const gradCourses = [
        "Deep Learning", "Data Science Tools & Applications", "Image & Video Computing",
        "Data Systems Architecture", "Graduate Algorithms", "Advanced Topics in CS",
        "Object-Oriented Software Principles"
];

const undergradCourses = [
        "Machine Learning", "Artificial Intelligence", "Computer Vision",
        "Natural Language Processing", "Software Engineering", "Distributed Systems",
        "Foundations of Data Science", "Introduction to Algorithms", "Computer Systems",
        "Full Stack Development", "Probability in Computing", "Geometric Algorithms"
];

const apCredits = [
        "Computer Science A", "Calculus BC", "English Literature", "Physics 1", "European History"
];

export default function Education() {
        return (
            <Wrapper>
                    <SectionTitle>Education</SectionTitle>

                    <SchoolHeader>
                            <h3>Boston University</h3>
                            <span>Sep 2022 – May 2026</span>
                    </SchoolHeader>
                    <Meta>B.A./M.S. Computer Science & Artificial Intelligence · GPA: 3.66 · Boston, MA</Meta>

                    <HonorRow>
                            <span className="label">Honors</span>
                            <span className="value">Dean's List — 6 semesters</span>
                    </HonorRow>
                    <HonorRow>
                            <span className="label">Degrees</span>
                            <span className="value">B.A. Computer Science (2022–2026) · M.S. Computer Science (2025–2026)</span>
                    </HonorRow>

                    <Divider />

                    <CourseSection>
                            <h4>Graduate Coursework</h4>
                            <TagRow>
                                    {gradCourses.map(c => <Tag key={c}>{c}</Tag>)}
                            </TagRow>
                    </CourseSection>

                    <CourseSection>
                            <h4>Undergraduate Coursework</h4>
                            <TagRow>
                                    {undergradCourses.map(c => <Tag key={c}>{c}</Tag>)}
                            </TagRow>
                    </CourseSection>

                    <CourseSection>
                            <h4>Advanced Placement Credit</h4>
                            <TagRow>
                                    {apCredits.map(c => <Tag key={c}>{c}</Tag>)}
                            </TagRow>
                    </CourseSection>

            </Wrapper>
        );
}