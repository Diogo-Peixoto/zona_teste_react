import { useMain } from "../../hooks";
import { MainContainer } from "./style";
import { v4 as uuidv4 } from "uuid";

const DropCanva = ({ children }: any) => {
  const { stageRef, setDataPages, dragUrl, dataPages } = useMain();
  console.log(dataPages);
  return (
    <MainContainer
      onDrop={e => {
        e.preventDefault();
        stageRef?.current?.setPointersPositions(e);
        let id = uuidv4();

        setDataPages(
          dataPages.concat({
            ...stageRef.current.getPointerPosition(),
            object: dragUrl?.current,
            width: 160,
            height: 100,
            fill: "#A6A6A6",
            draggable: true,
            id: id
          })
        );
      }}
      onDragOver={e => e.preventDefault()}
    >
      {children}
    </MainContainer>
  );
};

export default DropCanva;
