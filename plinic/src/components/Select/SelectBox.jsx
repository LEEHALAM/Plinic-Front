import { useState } from 'react';
import styled from 'styled-components';

function SelectBox({ sortBy }) {
  const [currentSortType, setCurrentSortType] = useState('정확도순');
  const [toggleMenu, setToggleMenu] = useState(false);
  const sortLabel = sortBy === 'playlists' ? '플레이리스트수' : sortBy === 'likes' ? '좋아요' : '';
  const sortOptions = [
    { value: 'default', name: '정확도순' },
    { value: `${sortBy}Asc`, name: `${sortLabel} ↑` },
    { value: `${sortBy}Desc`, name: `${sortLabel} ↓` },
  ];

  const handleChange = e => {
    const { innerText } = e.target;
    const selectedOption = sortOptions.find(option => option.name === innerText);
    setCurrentSortType(innerText);
    setToggleMenu(false);
    console.log(selectedOption.value);
  };

  console.log(currentSortType);
  return (
    <Container>
      <SortLabel onClick={() => setToggleMenu(current => !current)}>{currentSortType} ▼</SortLabel>
      <Select show={toggleMenu}>
        <OptionBox>
          {sortOptions.map(option => (
            <Option key={option.value} onClick={handleChange}>
              {option.name}
            </Option>
          ))}
        </OptionBox>
      </Select>
    </Container>
  );
}

export default SelectBox;

const Container = styled.div`
  position: relative;
  width: fit-content;
`;

const SortLabel = styled.div`
  padding: 8px;
  width: 100%;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

const Select = styled.ul`
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: ease opacity 0.2s;
`;

const OptionBox = styled.div`
  background: #fff;
  position: absolute;
  top: 40px;
  right: 0;
  padding: 10px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
  z-index: 2;
`;

const Option = styled.li`
  width: fit-content;
  padding: 0;
  margin: 0;
  user-select: none;
  cursor: pointer;
`;
