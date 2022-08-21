import styled from "styled-components";

export const Container = styled.div`
  height: calc((100vh - 300px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    border: 8px solid ${({ theme }) => theme.white};
    border-top: 8px solid ${({ theme }) => theme.blue};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
