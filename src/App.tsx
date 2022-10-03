import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      </RecoilRoot>
    </>
  );
}

export default App;
