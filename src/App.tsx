import { Stage, Layer, Rect, Circle, Text, Line, Shape } from "react-konva";

function App() {
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer x={400}>
          <Text text="Formas padrão" />
          <Rect x={20} y={50} width={100} height={100} fill="red" />
          <Circle x={200} y={100} fill="green" radius={50} />
          <Line
            x={20}
            y={200}
            stroke="black"
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            closed
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
          />
        </Layer>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(20, 50);
              context.lineTo(220, 80);
              context.quadraticCurveTo(150, 100, 260, 170);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={4}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
