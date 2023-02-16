import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext
} from "react";

import Konva from "konva";

interface IMainData {
  dataPages: any;
  setDataPages: any;
  dragUrl: React.MutableRefObject<any>;
  stageRef: React.MutableRefObject<any>;
}

interface IMainProviderProps {
  children: ReactNode;
}

const MainContext = createContext<IMainData>({} as IMainData);

const MainProvider: React.FC<IMainProviderProps> = ({ children }) => {
  const [dataPages, setDataPages] = useState([]);
  const dragUrl = useRef();
  const stageRef = useRef<Konva.Stage[]>(null);

  return (
    <MainContext.Provider
      value={{ dataPages, setDataPages, dragUrl, stageRef }}
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
