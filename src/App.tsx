import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </>
  );
}

export default App;
