import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function TextBtn() {
  let [likedCount, setLikedCount] = useState(0);
  let [likedBtnActive, setLikedBtnActive] = useState(false);

  const onClickLikedBtn = () => {
    setLikedBtnActive(!likedBtnActive);
    likedBtnActive ? setLikedCount((likedCount -= 1)) : setLikedCount((likedCount += 1));
  };

  useEffect(() => {
    console.log(likedCount, likedBtnActive);
  }, [likedBtnActive]);

  return (
    <LikedBtn>
      {/* <FontAwesomeIcon icon={faHeart} /> */}
      <FavoriteBorderIcon fontSize="40px" onClick={onClickLikedBtn} />
      {likedCount}
    </LikedBtn>
  );
}

export default TextBtn;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;

const LikedBtn = styled.button`
  width: 70px;
  height: 30px;
  border: solid 1.5px ${NAVY};
  border-radius: 15px;
  background-color: ${WHITE};
  ${({ theme }) => theme.align.flexCenter};
  color: ${NAVY};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[10]};
  cursor: pointer;
`;
