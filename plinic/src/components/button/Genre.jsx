import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

function Genre() {
  const [buttonActive, setButtonActive] = useState(false);

  const onClickGenreButton = () => {
    // if (buttonActive == true) {
    //   setButtonActive(GenreButton);
    // } else {
    //   setButtonActive(GenreButtonClicked);
    // }
    // console.log(GenreButton);
  };

  return (
    <ThemeProvider theme={theme}>
      <GenreButton onClick={onClickGenreButton}>acoustic</GenreButton>
    </ThemeProvider>
  );
}

export default Genre;

const GenreButton = styled.button`
  width: 65px;
  height: 30px;
  border: solid 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.align.flexCenter};
  color: ${({ theme }) => theme.color.navy};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[10]};
`;

const GenreButtonClicked = styled.button`
  width: 65px;
  height: 30px;
  border: solid 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.navy};
  ${({ theme }) => theme.align.flexCenter};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[10]};
`;
