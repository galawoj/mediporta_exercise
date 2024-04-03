import { useEffect } from "react";
import { useAppContext } from "../store/AppContext";

import DataTable from "./DataTable";
import Loader from "./Loader";

const Tags: React.FC = () => {
  const {
    tags,
    loadingState,
    errorState,
    setTags,
    setErrorState,
    setLoadingState,
  } = useAppContext();

  useEffect(() => {
    setLoadingState(true);
    fetch(
      "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
    )
      .then((res) => res.json())
      .then((data) => {
        setTags(data.items);
        console.log(tags);
      })
      .catch((error) => setErrorState(error))
      .finally(() => {
        setLoadingState(false);
      });
  }, []);

  return (
    <>
      {loadingState && <Loader />}
      {!errorState ? <DataTable /> : <div>Error: {errorState.message}</div>}
    </>
  );
};

export default Tags;
