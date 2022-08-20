import { SmallBox } from "@/components/styled/smallBox";
import { Container } from "./styles";

export function PostBox() {
  return (
    <Container>
      <header>
        <h1>JavaScript data types and data structures</h1>

        <time>Há 1 dia</time>
      </header>

      <p className="content">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language.
      </p>
    </Container>
  );
}
