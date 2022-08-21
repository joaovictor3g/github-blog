import { PostBox } from "@/components/shared/PostBox";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const searchSchema = zod.object({
  query: zod.string(),
});

type SearchSchemaType = zod.infer<typeof searchSchema>;

export function SectionPosts() {
  const [response, setResponse] = useState<IssuesResponseProps>();

  const { handleSubmit, register } = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
  });

  async function loadPosts(query?: string) {
    try {
      const response = await api.get(
        `/search/issues?q=${query ?? ""}repo:${USERNAME}/${REPO}`
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

  async function onSubmit(data: SearchSchemaType) {
    await loadPosts(data.query);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Container>
      <div>
        <div className="about">
          <h1>Publicações</h1>

          <span>{response?.total ?? 0} publicações</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            disabled={!response?.posts}
            {...register("query")}
          />
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
