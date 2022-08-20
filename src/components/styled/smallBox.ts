import styled from "styled-components";

export const SmallBox = styled.div`
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 10px;

  overflow: hidden;

  &:hover {
    border: 2px solid ${({ theme }) => theme["gray-400"]};
  }
`;
