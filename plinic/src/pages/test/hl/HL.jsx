import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../../components/input/Input';

function HL() {
  return (
    <Wrapper>
      {/* <Input usedFor={'nickname'} /> */}
      {/* <Input usedFor={'search'} />
      <Input usedFor={'title'} />
      <Input usedFor={'content'} /> */}
      <Link to="/hl/profile">Profile Component</Link>
      <Link to="/hl/thumbnail">thumbnail Component</Link>
    </Wrapper>
  );
}

export default HL;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
`;
