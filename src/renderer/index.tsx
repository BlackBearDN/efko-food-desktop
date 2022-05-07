import { render } from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createContext} from "react";

import App from './App';
import RootStore from "./store/store";

interface State {
  store: RootStore
}

const store = new RootStore()

export const Context = createContext<State>({
  store
})

render(
  <Context.Provider value={{
    store
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root'));
