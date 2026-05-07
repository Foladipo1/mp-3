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

const ProjectItem = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid #e8e4df;
  &:last-child { border-bottom: none; }
`;

const ItemHeader = styled.div`
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

const Meta = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;

  a {
    font-size: 0.8rem;
    color: #1a1a1a;
    text-decoration: none;
    border-bottom: 1px solid #1a1a1a;
    &:hover { color: #6b6b6b; border-color: #6b6b6b; }
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
`;

const Tag = styled.span`
  font-size: 0.78rem;
  color: #1a1a1a;
  background: #f0eee9;
  padding: 3px 10px;
  border-radius: 20px;
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

export default function Projects() {
    return (
        <Wrapper>
            <SectionTitle>Projects</SectionTitle>

            <ProjectItem>
                <ItemHeader>
                    <h3>VisionSentry — Thermal UAV Detection & Tracking</h3>
                    <span>2025</span>
                </ItemHeader>
                <Meta>
                    <a href="https://github.com/foladipo" target="_blank" rel="noreferrer">GitHub ↗</a>
                </Meta>
                <TagRow>
                    {["PyTorch", "YOLOv12", "BoT-SORT", "OpenCV", "SLURM"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Built an end-to-end IR drone detection and tracking pipeline on BU SCC; trained YOLOv12 on 318k thermal frames with sequence-level splits to prevent data leakage, achieving mAP@0.50 of 0.919.</li>
                    <li>Implemented BoT-SORT multi-object tracking with MOT-format export; roadmap includes IR+RGB weighted box fusion and monocular depth estimation.</li>
                    <li>Managed training jobs on a SLURM-based HPC cluster across the full pipeline from raw Anti-UAV frames through YOLO-format conversion to inference.</li>
                </BulletList>
            </ProjectItem>

            <ProjectItem>
                <ItemHeader>
                    <h3>EPL Match Outcome Predictor — Dual-Task Transformer</h3>
                    <span>2025</span>
                </ItemHeader>
                <Meta>
                    <a href="https://github.com/Foladipo1" target="_blank" rel="noreferrer">GitHub ↗</a>
                </Meta>
                <TagRow>
                    {["PyTorch", "Transformers", "Pandas", "scikit-learn"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Trained Transformer and MLP models on 3,420 EPL matches for simultaneous outcome classification and goal differential regression, achieving 57% accuracy exceeding published baselines.</li>
                    <li>Encoded 20-match rolling team history using advanced football metrics (xG, PPDA, deep progressions); compared positional vs. learned encodings across architectures.</li>
                    <li>MLP outperformed Transformer by 11% accuracy, attributed to dataset size constraints and feature engineering quality.</li>
                </BulletList>
            </ProjectItem>

            <ProjectItem>
                <ItemHeader>
                    <h3>FootyLiveliness — Match Excitement Predictor</h3>
                    <span>2024</span>
                </ItemHeader>
                <Meta>
                    <a href="https://github.com/James-Njoroge/FootyLiveliness" target="_blank" rel="noreferrer">GitHub ↗</a>
                </Meta>
                <TagRow>
                    {["Python", "scikit-learn", "Pandas"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Collaborative project predicting Premier League match excitement levels from historical match data.</li>
                    <li>Contributed to feature engineering pipeline incorporating team form, historical matchups, and playing styles.</li>
                </BulletList>
            </ProjectItem>

            <ProjectItem>
                <ItemHeader>
                    <h3>Quiz App</h3>
                    <span>2025</span>
                </ItemHeader>
                <Meta>
                    <a href="https://github.com/Foladipo1/quiz-app" target="_blank" rel="noreferrer">GitHub ↗</a>
                </Meta>
                <TagRow>
                    {["Next.js", "TypeScript", "MongoDB", "styled-components"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Built full-stack quiz application with leaderboard, score submission, and Google OAuth authentication.</li>
                    <li>Owned the backend: MongoDB layer, server actions, and SSR hydration fixes with styled-components registry.</li>
                </BulletList>
            </ProjectItem>

            <ProjectItem>
                <ItemHeader>
                    <h3>To-Do Calendar Application</h3>
                    <span>2024</span>
                </ItemHeader>
                <Meta>
                    <a href="https://github.com/CS-411-To-Do-Calendar/to-do-list" target="_blank" rel="noreferrer">GitHub ↗</a>
                </Meta>
                <TagRow>
                    {["React", "Node.js", "Express", "MongoDB"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Collaborative full-stack task management app with calendar integration, RESTful API, and drag-and-drop scheduling.</li>
                    <li>Implemented user authentication and database persistence; applied agile methodology with sprint planning.</li>
                </BulletList>
            </ProjectItem>

            <ProjectItem>
                <ItemHeader>
                    <h3>Footy — Pickup Games & Team Management Platform</h3>
                    <span>2025</span>
                </ItemHeader>
                <TagRow>
                    {["Python", "Django", "SQLite", "HTML/CSS"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Solo full-stack soccer community platform with player profiles, pickup game creation, team invitations, and match scheduling.</li>
                    <li>Added player statistics, profile comments, video uploads, and Google Maps integration; deployed on university server.</li>
                </BulletList>
            </ProjectItem>

            <ProjectItem>
                <ItemHeader>
                    <h3>Mini Facebook — Social Networking Web App</h3>
                    <span>2025</span>
                </ItemHeader>
                <TagRow>
                    {["Python", "Django", "SQLite", "HTML/CSS"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Facebook-style social networking app with user authentication, friend relationships, and personalized news feed.</li>
                    <li>Implemented status posting with multi-image uploads and full CRUD functionality; deployed on university server.</li>
                </BulletList>
            </ProjectItem>

        </Wrapper>
    );
}