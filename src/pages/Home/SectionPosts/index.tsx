import { PostBox } from "@/components/shared/PostBox";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Container } from "./styles";

const USERNAME = "joaovictor3g";
const REPO = "github-blog";

type OriginalPost = {
  title: string;
  updated_at: string;
  body: string;
  number: number;
};

type Post = {
  title: string;
  updatedAt: string;
  body: string;
  id: number;
};

interface IssuesResponseProps {
  total: number;
  posts: Post[];
}

export function SectionPosts() {
  const [response, setResponse] = useState<IssuesResponseProps>();

  async function loadPosts() {
    try {
      const response = await api.get(
        `/search/issues?q=${""}repo:${USERNAME}/${REPO}`
      );

      const { total_count, items } = response.data;

      const issue = {
        total: total_count,
        posts: items.map(
          ({ title, updated_at, body, number }: OriginalPost) => ({
            title,
            updatedAt: updated_at,
            body,
            id: number,
          })
        ),
      };

      setResponse(issue);
    } catch {}
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Container>
      <div>
        <div className="about">
          <h1>Publicações</h1>

          <span>6 publicações</span>
        </div>

        <form>
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </div>
      <div className="post-box-container">
        {response?.posts.map((post) => (
          <PostBox key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}
