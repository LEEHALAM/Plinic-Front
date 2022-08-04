import React from 'react';
import styled from 'styled-components';

function Main({ children }) {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 57px);
  /* background-color: ${({ theme }) => theme.color.navy}; */
  padding-top: 30px;
`;
