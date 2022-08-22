import React from 'react';
import styled from 'styled-components';

function Footer({ onClose }) {
  const clickedCloseButton = () => {
    onClose();
    console.log('clicked close button');
  };

  const clickedCreateButton = () => {
    onClose();
    console.log('clicked create button');
  };
  return (
    <Wrapper>
      <Text>{'장르 또는 분위기에서 하나만 선택해주세요.'}</Text>
      <ButtonGroup>
        <Button type={'close'} onClick={clickedCloseButton}>
          취소
        </Button>
        <Button type={'create'} onClick={clickedCreateButton}>
          생성
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Footer;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const WHITE = ({ theme }) => theme.color.white;
const LIGHTGREEN = ({ theme }) => theme.color.lightGreen;
const THICK = ({ theme }) => theme.font.weight.thick;
const BOLD = ({ theme }) => theme.font.weight.bold;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 177px;
`;

const Text = styled.span`
  color: ${WHITE};
  ${THICK}
  ${({ theme }) => theme.font.size[14]}
`;

const ButtonGroup = styled.div`
  ${FLEX_CENTER}
  gap: 25px;
`;

const Button = styled.div`
  cursor: pointer;
  ${BOLD};
  ${({ theme }) => theme.font.size[20]}
  color: ${props => (props.type === 'close' ? WHITE : LIGHTGREEN)};
`;
