import * as React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid red;
  height: 100px;
  &:hover {
    background-color: blue;
  }
`;

const Div200Px = styled(Div)`
  height: 200px;
  &:hover {
    background-color: green;
  }
`;

export const Welcome2: React.FC = () => {
  return (
    <div>
      <Div>styled-components 写法 100px</Div>
      <Div200Px className="test_custom_class">
        styled-components 写法 200px
      </Div200Px>
    </div>
  );
};
