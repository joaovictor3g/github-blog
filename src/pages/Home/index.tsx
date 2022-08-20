import { ProfileBox } from "@/components/shared/ProfileBox";
import { SectionForm } from "./SectionForm";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <ProfileBox />
      <SectionForm />
    </Container>
  );
}
