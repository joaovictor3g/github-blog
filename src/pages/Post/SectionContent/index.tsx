import { Container, Markdown } from "./styles";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";

const md = `
  let foo = 42; // foo is now a number <br />
  foo = ‘bar’; // foo is now a string <br />
  foo = true; // foo is now a boolean <br />
`;

export function SectionContent() {
  return (
    <Container>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </p>

      <Markdown
        remarkPlugins={[remarkGfm, remarkMdx]}
        rehypePlugins={[rehypeHighlight]}
      >
        {md}
      </Markdown>
    </Container>
  );
}
