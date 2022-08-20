import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  padding: 2rem;
  border-radius: inherit;
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  max-height: 260px;
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.white};
      width: 70%;
    }

    time {
      color: ${({ theme }) => theme["gray-300"]};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
    }
  }

  .content {
    margin-top: 20px;
    color: ${({ theme }) => theme["gray-200"]};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    text-align: left;

    text-overflow: ellipsis;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme["gray-400"]};

    header h1 {
      text-decoration: underline;
    }
  }
`;
