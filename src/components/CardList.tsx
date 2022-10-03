import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function CardList({ children }: Props) {
  return <ListContainer>{children}</ListContainer>;
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 16px;
`;

export default CardList;
