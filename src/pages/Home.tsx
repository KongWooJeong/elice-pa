import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <div className="content">test</div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
`;

export default Home;
