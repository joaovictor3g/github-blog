import { ProfileBox } from "@/components/shared/ProfileBox";
import { SectionForm } from "./SectionForm";
import { SectionPosts } from "./SectionPosts";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <ProfileBox />
      <SectionForm />
      <SectionPosts />
    </Container>
  );
}
