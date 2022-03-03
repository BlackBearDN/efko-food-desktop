import {useContext} from "react";
import {observer} from "mobx-react-lite";
import {ThemeProvider} from "styled-components";

import './App.scss';

import Routes from "./routes";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import {Context} from "./index";
import { GlobalStyles } from "./globalStyles";
import {dark, light} from "./themes";

const App = observer(() => {
  const {store} = useContext(Context)

  return (
    <ThemeProvider theme={store.themeBool ? dark : light}>
      <>
        <GlobalStyles />
        <Header />
        <Navigation />
        <Routes />
      </>
    </ThemeProvider>
  );
})

export default App
