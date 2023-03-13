import styled from "styled-components";

interface colorButton {
  backgroundColor: "#343A40" | "#663399" | "#FFFFFF";
}

interface isErrorEmail {
  isError: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Create and edit modal */

export const ModalCreate = styled.div`
  width: 600px;
  min-height: 248.56px;
  max-height: 500px;
  padding: 26.28px 14.81px;

  background: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 1600px) {
    width: 500px;
    min-height: 200px;
    max-height: 420px;

    border-radius: 5px;

    h4 {
      font-weight: 600;
      font-size: 17px;
      line-height: 18px;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonModal = styled.button<colorButton>`
  height: 40px;
  width: 280px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};

  font-weight: 500;
  font-size: 14px;
  line-height: 16.41px;
  color: ${props =>
    props.backgroundColor === "#FFFFFF" ? "#663399" : "#FFFFFF"};

  border: ${props =>
    props.backgroundColor === "#FFFFFF" ? "solid 1px #663399" : "none"};

  @media (max-width: 1600px) {
    height: 36px;
    width: 230px;
  }
`;
export const ParagraphError = styled.p`
  color: #de2d2d;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  margin-top: 7px;
`;

export const Modal1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }

  input {
    height: 40px;
    width: 100%;
    border: 1px solid #a5a5a5;
    border-radius: 5px;

    padding-left: 15px;
  }

  svg {
    width: 13px;
    height: 13px;

    position: absolute;
    right: 8.44px;
  }

  @media (max-width: 1600px) {
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    input {
      height: 36px;
    }
  }
`;

export const Modal2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 210px;

    overflow-y: scroll;

    ::-webkit-scrollbar-track {
      background-color: white;
    }
    ::-webkit-scrollbar {
      background-color: white;
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #a5a5a5;
      border-radius: 8px;
    }
  }

  @media (max-width: 1600px) {
    gap: 10px;

    ul {
      gap: 15px;
      height: 172px;
    }
  }
`;

export const HeaderModal2 = styled.div`
  border-bottom: 1px solid #a5a5a5;

  h4 {
    margin-bottom: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    width: 30px;
    height: 30px;
    color: #343a40;
    cursor: pointer;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AddPerson = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    height: 40px;
    width: 131px;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 16.41px;
  }

  @media (max-width: 1600px) {
    button {
      height: 36px;
      width: 110px;
    }
  }
`;

export const InputEmail = styled.input<isErrorEmail>`
  height: 40px;
  width: 424px;
  border: 1px solid ${({ isError }) => (isError ? "#DE2D2D" : "#A5A5A5")};
  border-radius: 5px;

  padding-left: 15px;

  @media (max-width: 1600px) {
    height: 36px;
    width: 344px;
  }
`;

export const PersonItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 15px;
  }

  figure {
    width: 40px;
    height: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #343a40;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #a5a5a5;
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 1600px) {
    figure {
      width: 35px;
      height: 35px;
    }
  }
`;

/* Modal De deletar */

export const ModalDelet = styled.div`
  width: 900px;
  height: 284px;

  padding: 26.28px 14.81px;

  background: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
  }

  input {
    height: 50px;
    width: 100%;

    border: 1px solid #a5a5a5;
    border-radius: 5px;

    padding-left: 15px;
  }
`;
