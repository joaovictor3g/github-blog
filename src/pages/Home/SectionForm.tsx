import { Container } from "./section-form.styles";

export function SectionForm() {
  return (
    <Container>
      <div className="about">
        <h1>Publicações</h1>

        <span>6 publicações</span>
      </div>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </Container>
  );
}
