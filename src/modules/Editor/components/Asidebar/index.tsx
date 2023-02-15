import { MainContainer } from "./style";
import CircleImage from "../../assets/ellipse.svg";
import RetactangleImage from "../../assets/rectangle.svg";
import SquareImage from "../../assets/square.svg";
import StarImage from "../../assets/star.svg";
import LineImage from "../../assets/line.svg";
import TextImage from "../../assets/editIconText.svg";
import TriangleImage from "../../assets/triangle.svg";

const Asidebar = () => {
  return (
    <MainContainer>
      <h3>Arraste o elemento para o editor para inserir no documento</h3>

      <div>
        <figure>
          <img src={TextImage} alt="Texto" />
        </figure>
        <figure>
          <img src={RetactangleImage} alt="Retangulo" />
        </figure>
        <figure>
          <img src={CircleImage} alt="Circulo" />
        </figure>
        <figure>
          <img src={TriangleImage} alt="Triangulo" />
        </figure>
        <figure>
          <img src={SquareImage} alt="Quadrado" />
        </figure>
        <figure>
          <img src={StarImage} alt="Estrela" />
        </figure>
        <figure>
          <img src={LineImage} alt="Linha" />
        </figure>
      </div>
    </MainContainer>
  );
};

export default Asidebar;
