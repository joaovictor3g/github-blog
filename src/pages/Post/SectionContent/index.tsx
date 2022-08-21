import { Container, Markdown } from "./styles";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";

interface SectionContentProps {
  body: string;
}

export function SectionContent({ body }: SectionContentProps) {
  return (
    <Container>
      <Markdown
        remarkPlugins={[remarkGfm, remarkMdx]}
        rehypePlugins={[rehypeHighlight]}
      >
        {body}
      </Markdown>
    </Container>
  );
}
