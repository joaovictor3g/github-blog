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
`;

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;

  width: 100%;
  background: ${({ theme }) => theme["gray-600"]};
  min-height: 110px;
  border-radius: 2px;
  padding: 1rem;
`;
