import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

function PlaylistModal() {
  return (
    <Wrapper>
      {/* 썸네일 설정 */}
      <Thumbnail />
      {/* <div>썸네일</div> */}
      {/* 장르 토글 메뉴 */}
      <div>장르 토글 메뉴</div>
      {/* 분위기 토글 메뉴 */}
      <div>분위기 토글 메뉴</div>
      {/* 곡 개수 슬라이더 */}
      <div>곡 개수 슬라이더</div>
    </Wrapper>
  );
}

export default PlaylistModal;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
  justify-content: space-between;
  width: 565px;
  height: fit-content;
  /* height toggle 메뉴에 따라 늘어나야 함. */

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
