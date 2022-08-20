import { Container } from "./styles";

type Post = {
  title: string;
  updatedAt: string;
  body: string;
  id: number;
};
interface PostBoxProps {
  post: Post;
}

export function PostBox({ post }: PostBoxProps) {
  return (
    <Container to={`/post/${post.id}`}>
      <header>
        <h1>{post.title}</h1>

        <time>Há 1 dia</time>
      </header>

      <p className="content">{post.body}</p>
    </Container>
  );
}
