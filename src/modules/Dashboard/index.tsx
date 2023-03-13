import {
  AddPerson,
  BoxButton,
  ButtonModal,
  Container,
  HeaderModal2,
  InputEmail,
  MainContent,
  ModalCreate,
  Modal1,
  Modal2,
  ParagraphError,
  PersonItem,
  ModalDelet
} from "./styled";
import { GrClose } from "react-icons/gr";
import { MdOutlineModeEditOutline } from "react-icons/md";
import DefauldImage from "./defaultImg.svg";
import { useState } from "react";

type ITypeModal = "Create Team" | "Add Person" | "Delete Team" | "";

const Dashboard = () => {
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [typeModal, settypeModal] = useState<ITypeModal>("Delete Team");

  if (typeModal === "Delete Team") {
    return (
      <Container>
        <ModalDelet>
          <h4>Excluir equipe</h4>
          <p>
            Tem certeza que você quer <b>excluir</b> a Equipe Tech?
          </p>
          <div>
            <p>
              Para você completar essa ação, escreva a palavra{" "}
              <b>“confirmar”</b> na caixa de texto abaixo
            </p>
            <input type="text" />
          </div>
          <div>
            <button>Não</button>
            <button>Sim</button>
          </div>
        </ModalDelet>
      </Container>
    );
  }

  return (
    <Container>
      <ModalCreate>
        {typeModal === "Create Team" && (
          <Modal1>
            <GrClose />
            <h4>UX DOC para equipes</h4>
            <p>
              Crie documentos e compartilhe recursos visuais e textos com a sua
              equipe de forma rápida e fácil.
            </p>
            <input type="text" placeholder="Nome da equipe" />
          </Modal1>
        )}

        {typeModal === "Add Person" && (
          <Modal2>
            <HeaderModal2>
              {isSettings ? (
                <>
                  <h4>
                    Equipe tech <MdOutlineModeEditOutline />
                  </h4>
                </>
              ) : (
                <h4>Adicione os participantes da equipe</h4>
              )}
            </HeaderModal2>
            <MainContent>
              <AddPerson>
                <div>
                  <InputEmail
                    type="text"
                    placeholder="E-mail"
                    isError={isErrorEmail}
                  />
                  {isErrorEmail && (
                    <ParagraphError>
                      Esse e-mail não está cadastrado no UX DOC.
                    </ParagraphError>
                  )}
                </div>

                <button>Adicionar</button>
              </AddPerson>

              <ul>
                <PersonItem>
                  <div>
                    <figure>
                      <img src={DefauldImage} alt="d" />
                    </figure>
                    <div>
                      <p>Stela Naomi Kurachi (proprietário)</p>
                      <span>stela@bitsacademy.com.br</span>
                    </div>
                  </div>
                  <GrClose />
                </PersonItem>
              </ul>
            </MainContent>
          </Modal2>
        )}

        <BoxButton>
          {isSettings ? (
            <ButtonModal backgroundColor="#FFFFFF">Excluir equipe</ButtonModal>
          ) : (
            <ButtonModal backgroundColor="#343A40">Cancelar</ButtonModal>
          )}
          <ButtonModal backgroundColor="#663399">Salvar</ButtonModal>
        </BoxButton>
      </ModalCreate>
    </Container>
  );
};

export default Dashboard;
