import React, { Suspense } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;
