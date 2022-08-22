import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HL() {
  return (
    <Wrapper>
      <Link to="/hl/profile">Profile Component</Link>
      <Link to="/hl/thumbnail">thumbnail Component</Link>
      <Link to="/hl/scroll">scroll Component</Link>
      <Link to="/hl/switch">switch Component</Link>
      <Link to="/hl/modal">modal Component</Link>
      <Link to="/hl/card">card Component</Link>
    </Wrapper>
  );
}

export default HL;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
`;
