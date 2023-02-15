import { MainContainer } from "./style";
import { BsTrash } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";

const HeaderPageCanva = () => {
  return (
    <MainContainer>
      <BsTrash size={20} color="#a5a5a5" />
      <BiAddToQueue color="#a5a5a5" size={20} />
    </MainContainer>
  );
};

export default HeaderPageCanva;
