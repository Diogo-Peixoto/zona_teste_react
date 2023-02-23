import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
  useEffect
} from "react";

import Konva from "konva";

interface IMainData {
  dataPages: any;
  setDataPages: any;
  dragUrl: React.MutableRefObject<any>;
  stageRef: React.MutableRefObject<any>;
  selectObject: string;
  setSelectObject: React.Dispatch<React.SetStateAction<string>>;
  setIsGroupSelect: React.Dispatch<React.SetStateAction<boolean>>;
  isGroupSelect: boolean;
}

interface IMainProviderProps {
  children: ReactNode;
}

const MainContext = createContext<IMainData>({} as IMainData);

const MainProvider: React.FC<IMainProviderProps> = ({ children }) => {
  const [dataPages, setDataPages] = useState([]);
  const [selectObject, setSelectObject] = useState("");
  const [isGroupSelect, setIsGroupSelect] = useState(false);
  const dragUrl = useRef();
  const stageRef = useRef<Konva.Stage[]>(null);

  useEffect(() => {
    const data: any = window.localStorage.getItem("data");

    if (dataPages[0] || data === null) {
      window.localStorage.setItem("data", JSON.stringify(dataPages));
    }
  }, [dataPages]);

  useEffect(() => {
    const data: any = window.localStorage.getItem("data");
    setDataPages(JSON.parse(data));
  }, []);

  return (
    <MainContext.Provider
      value={{
        dataPages,
        setDataPages,
        dragUrl,
        stageRef,
        selectObject,
        setSelectObject,
        setIsGroupSelect,
        isGroupSelect
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

function useMain(): IMainData {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("Error  UseMain");
  }

  return context;
}

export { useMain, MainProvider };
