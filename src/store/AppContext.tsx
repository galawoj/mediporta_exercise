import React, { useState } from "react";
import Tag from "../models/tag";

type AppContextObj = {
  tags: Tag[];
  errorState: any;
  loadingState: boolean;
  setTags: (newTags: Tag[]) => void;
  setErrorState: (newErrorState: any) => void;
  setLoadingState: (newlLoadingState: boolean) => void;
};

export const AppContext = React.createContext<AppContextObj | undefined>(
  undefined
);

type Props = {
  children?: React.ReactNode;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [errorState, setErrorState] = useState<any>(false);
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const ctxValue: AppContextObj = {
    tags: tags,
    errorState: errorState,
    loadingState: loadingState,

    setTags: setTags,
    setErrorState: setErrorState,
    setLoadingState: setLoadingState,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
}

export default AppContextProvider;
