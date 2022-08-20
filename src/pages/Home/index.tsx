import { SectionProfile } from "./SectionProfile";
import { SectionPosts } from "./SectionPosts";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <SectionProfile />
      <SectionPosts />
    </Container>
  );
}
