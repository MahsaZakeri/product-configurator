import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: sans-serif;
`;

const Panel = styled.div`
  flex: 1;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Preview = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => {
  return (
    <Wrapper>
      <Panel>{left}</Panel>
      <Preview>{right}</Preview>
    </Wrapper>
  );
};

export default Layout;
