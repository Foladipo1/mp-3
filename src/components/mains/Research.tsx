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

const ResearchItem = styled.div`
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

const Meta = styled.p`
  font-size: 0.8rem;
  color: #6b6b6b;
  margin: 0 0 12px;
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

const PaperLink = styled.a`
  display: inline-block;
  margin-top: 12px;
  font-size: 0.8rem;
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #1a1a1a;
  &:hover { color: #6b6b6b; border-color: #6b6b6b; }
`;

export default function Research() {
    return (
        <Wrapper>
            <SectionTitle>Research</SectionTitle>

            <ResearchItem>
                <ItemHeader>
                    <h3>Access Path Selection in Modern Columnar DBMSs</h3>
                    <span>2025</span>
                </ItemHeader>
                <Meta>Boston University · w/ Daniel Silla & Zach Verdieu</Meta>
                <TagRow>
                    {["C++", "DuckDB", "AVX-512", "TPC-H", "Python"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Evaluated Column Sketches (AVX-512), Zone Maps, CUBIT, and RABIT bitmap indexing in a custom DuckDB engine with PAX-like storage across selectivity, cardinality, and distribution dimensions.</li>
                    <li>Key finding: data layout (clustering) dominated all access path choices, reducing query latency by over 30× regardless of mechanism  outweighing any theoretical advantage of specialized indexes.</li>
                    <li>Proposed an empirically-grounded access path decision model for modern PAX-based columnar DBMSs.</li>
                </BulletList>
                <PaperLink href="https://github.com/Foladipo1/Access-Path-Selection/tree/Experiments" target="_blank" rel="noreferrer">
                    View Repository ↗
                </PaperLink>
            </ResearchItem>

            <ResearchItem>
                <ItemHeader>
                    <h3>Cross-Modal Interpretability Study: Vision & NLP</h3>
                    <span>2025</span>
                </ItemHeader>
                <Meta>Boston University</Meta>
                <TagRow>
                    {["PyTorch", "Grad-CAM", "BERT", "LIME", "ResNet-50"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Evaluated 4 saliency methods (Grad-CAM, Integrated Gradients, Saliency Maps, Occlusion) on ResNet-50 and gradient/LIME attribution on BERT sentiment analysis.</li>
                    <li>Designed human evaluation studies with 50 participants; gradient methods achieved 5× higher alignment than LIME in text tasks.</li>
                    <li>Contributed to understanding which interpretability methods best match human intuition across modalities.</li>
                </BulletList>
            </ResearchItem>

            <ResearchItem>
                <ItemHeader>
                    <h3>Medical Imaging Classification with Deep Learning</h3>
                    <span>Summer 2025</span>
                </ItemHeader>
                <Meta>Foremost Radiology Consultant Ltd. · Lagos, Nigeria</Meta>
                <TagRow>
                    {["PyTorch", "CNNs", "Transfer Learning", "ResNet", "DenseNet", "EfficientNet"].map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>
                <BulletList>
                    <li>Benchmarked 3 CNN architectures on a ~1,000-image chest scan dataset for early tuberculosis detection, automating metric collection and edge-case documentation.</li>
                    <li>Collaborated with radiologists to define evaluation criteria and interpret model failure modes across imaging modalities.</li>
                </BulletList>
            </ResearchItem>

        </Wrapper>
    );
}