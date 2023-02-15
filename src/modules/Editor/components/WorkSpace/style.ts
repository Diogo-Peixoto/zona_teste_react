import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #2d2b33;
  padding-block: 30px;

  max-height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2d2b33;
    border-radius: 18px;
    border: 2px solid white;
  }
`;
