import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import Footer from './Footer';

const Modal = ({ onClose }) => {
  return (
    <Wrapper>
      <Container>
        {/* 썸네일 설정 */}
        <Thumbnail />
        {/* <div>썸네일</div> */}
        {/* 장르 토글 메뉴 */}
        <div>장르 토글 메뉴</div>
        {/* 분위기 토글 메뉴 */}
        <div>분위기 토글 메뉴</div>
        {/* 곡 개수 슬라이더 */}
        <div>곡 개수 슬라이더</div>
        <Footer onClose={onClose} />
      </Container>
    </Wrapper>
  );
};

export default Modal;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const WHITE = ({ theme }) => theme.color.white;
const MINT = ({ theme }) => theme.color.mint;
const THICK = ({ theme }) => theme.font.weight.thick;
const BOLD = ({ theme }) => theme.font.weight.bold;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.darkGray};
  ${FLEX_CENTER_COLUMN}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  ${FLEX_CENTER_COLUMN}
  justify-content: space-between;
  width: 610px;
  height: 510px;
  /* height toggle 메뉴에 따라 늘어나야 함. */
  background-color: ${({ theme }) => theme.color.navy};
  border-radius: 40px;
  padding: 20px;

  & > div:nth-of-type(2) {
    width: 100%;
    height: 47px;
    background-color: orange;
  }
  & > div:nth-of-type(3) {
    width: 100%;
    height: 47px;
    background-color: yellow;
  }
  & > div:nth-of-type(4) {
    width: 100%;
    height: 90px;
    background-color: green;
  }
`;
