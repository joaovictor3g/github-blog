import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Container = styled.section`
  padding: 2rem;

  & > p {
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme["gray-200"]};
  }

  ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;

  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: ${({ theme }) => theme["gray-200"]};

  code {
    span {
      font-family: "Fira Code";
    }
  }
`;
