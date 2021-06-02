import React from 'react'
import BasicCounter from "./tutorial/useReducer/1.Basic-Counter";
import ToDo from "./tutorial/useReducer/2.ToDo/todo";
// import ContextAPI from "./tutorial/useContext/context-api"
import ContextAPI from "./tutorial/useContextCustomHook/context-api"
import DataApp from "./tutorial/CustomHooks/1-useFetch/DataApp"
import LocalStorageApp from "./tutorial/CustomHooks/2-useLocalStorage/LocalStorageApp"
import UpdateTitleApp from "./tutorial/CustomHooks/3-UpdateTitle/UpdateTitleApp"
import BackgroundThemeApp from "./tutorial/CustomHooks/4-useBackground/BackgroundThemeApp"


function App() {
  return (
    // <BasicCounter />
    // <ToDo />
    // <ContextAPI />
    // <DataApp />
    // <LocalStorageApp />
    // <UpdateTitleApp />
    <BackgroundThemeApp />
  );
}

export default App;
