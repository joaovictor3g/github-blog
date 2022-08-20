import { SectionAbout } from "./SectionAbout";
import { SectionContent } from "./SectionContent";
import { Container } from "./styles";

export function Post() {
  return (
    <Container>
      <SectionAbout />
      <SectionContent />
    </Container>
  );
}
