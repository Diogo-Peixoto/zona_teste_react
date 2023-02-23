import { MainProvider } from "./modules/Editor/hooks";
import { GroupProvider } from "./modules/Editor/hooks/useGroup";
import Editor from "./modules/Editor/pages";
import GlobalStyled from "./style/global";

function App() {
  return (
    <>
      <MainProvider>
        <GroupProvider>
          <Editor />
        </GroupProvider>
      </MainProvider>

      <GlobalStyled />
    </>
  );
}

export default App;
