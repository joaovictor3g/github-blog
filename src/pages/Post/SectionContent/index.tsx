import { Container, Markdown } from "./styles";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";

type Content = {
  user: {
    login: string;
  };
  updatedAt: string;
  title: string;
  url: string;
  body: string;
};
interface SectionContentProps {
  content: Content;
}

const md = `
  let foo = 42; // foo is now a number <br />
  foo = ‘bar’; // foo is now a string <br />
  foo = true; // foo is now a boolean <br />
`;

export function SectionContent({ content }: SectionContentProps) {
  return (
    <Container>
      {/* <p></p> */}

      <Markdown
        remarkPlugins={[remarkGfm, remarkMdx]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content.body}
      </Markdown>
    </Container>
  );
}
