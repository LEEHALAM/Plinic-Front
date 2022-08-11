import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function Input({ usedFor }) {
  const [userInput, setUserInput] = useState('');
  const [userSubmit, setUserSubmit] = useState('');

  const placeholder = () => {
    switch (usedFor) {
      case 'nickname':
        return '닉네임';
      case 'search':
        return '검색어';
      case 'title':
        return '제목';
      default:
        return '내용';
    }
  };

  const handleInput = e => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUserSubmit(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && (usedFor === 'nickname' || usedFor === 'search')) {
      setUserSubmit(e.target.value);
    }
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          usedFor={usedFor}
          value={userInput}
          placeholder={`${placeholder()}을 입력하세요.`}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        {usedFor === 'nickname' ? <span></span> : usedFor === 'search' && <div>🔍</div>}
      </FormStyled>

      <div>{userInput} 을 입력하였습니다.</div>
      <div>{userSubmit} 을 제출하였습니다.</div>
    </div>
  );
}

export default Input;

const NAVY = ({ theme }) => theme.color.navy;

const FormStyled = styled.form`
  position: relative;
  width: fit-content;
  & > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${NAVY};
    transform: scaleX(0);
    transform-origin: center;
    transition: all 0.3s;
  }
  & > div {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 20px;
    top: 12.5px;
  }
`;

const NickName = css`
  padding: 7px;
  max-width: 173px;
  border: 0;
  text-align: center;
  &:focus {
    + span {
      transform: scaleX(1);
    }
  }
`;

const Search = css`
  padding: 12px 20px;
  min-width: 632px;
  min-height: 50px;
  border: 2px solid ${NAVY};
  border-radius: 25px;
`;

const Title = css`
  padding: 10px 12px;
  width: 520px;
  border: 1px solid ${NAVY};
  border-radius: 10px;
`;

const Content = css`
  ${Title}
  height: 150px;
  resize: none;
`;

const InputStyled = styled.input.attrs(props => ({
  type: 'text',
  as: props.usedFor === 'content' ? 'textarea' : '',
  required: true,
}))`
  ${({ theme }) => theme.font.size['16']}
  caret-color: ${NAVY};
  &:focus {
    outline: none;
  }
  ${props => {
    switch (props.usedFor) {
      case 'nickname':
        return NickName;
      case 'search':
        return Search;
      case 'title':
        return Title;
      case 'content':
        return Content;
      default:
        return;
    }
  }}
`;
