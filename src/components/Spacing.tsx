import styled from "styled-components";

interface Props {
  height: string;
}

const Spacing = styled.div<Props>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
`;

export default Spacing;
