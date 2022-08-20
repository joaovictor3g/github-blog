import { SectionProfile } from "./SectionProfile";
import { SectionForm } from "./SectionForm";
import { SectionPosts } from "./SectionPosts";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <SectionProfile />
      <SectionForm />
      <SectionPosts />
    </Container>
  );
}
