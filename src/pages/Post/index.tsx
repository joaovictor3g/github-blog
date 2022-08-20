import { SectionAbout } from "./SectionAbout";
import { SectionContent } from "./SectionContent";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { userInfo } from "os";

const REPO = "github-blog";
const USERNAME = "joaovictor3g";

type User = {
  login: string;
};

type OriginalPost = {
  title: string;
  updated_at: string;
  body: string;
  number: number;
};

interface PostProps {
  user: User;
  title: string;
  updatedAt: string;
  body: string;
  id: number;
  url: string;
}

export function Post() {
  const [post, setPost] = useState<PostProps>();

  const { id } = useParams() as { id: string };
  const numberId = Number(id);

  useEffect(() => {
    if (numberId !== undefined) {
      api
        .get(`/repos/${USERNAME}/${REPO}/issues/${numberId}`)
        .then((response) => {
          const { user, body, number, updated_at, title, url } = response.data;

          return {
            user: {
              login: user.login,
            },
            body,
            id: number,
            updatedAt: updated_at,
            title,
            url,
          };
        })
        .then((_post) => setPost(_post));
    }
  }, [numberId]);

  if (!post) return null;

  return (
    <Container>
      <SectionAbout about={post} />
      <SectionContent content={post} />
    </Container>
  );
}
