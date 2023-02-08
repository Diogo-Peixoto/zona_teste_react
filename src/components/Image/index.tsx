import { Image } from "react-konva";
import useImage from "use-image";

const URLImage = ({ image, selectedId }: any) => {
  const [img] = useImage(image.src);

  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

export default URLImage;
