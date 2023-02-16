import { MainProvider } from "./modules/Editor/hooks";
import Editor from "./modules/Editor/pages";
import GlobalStyled from "./style/global";

function App() {
  return (
    <>
      <MainProvider>
        <Editor />
      </MainProvider>

      <GlobalStyled />
    </>
  );
}

export default App;
