import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown as Down } from '@fortawesome/free-solid-svg-icons';

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
      <SortLabel onClick={() => setToggleMenu(current => !current)}>
        <div>{currentSortType}</div>
        <FontAwesomeIcon icon={Down} />
      </SortLabel>
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

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const GRAY = ({ theme }) => theme.color.gray;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SortLabel = styled.div`
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: ${NAVY};
  user-select: none;
  cursor: pointer;
`;

const Select = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
  transform: scale(${props => (props.show ? '1' : '0')});
  transform-origin: top right;
  transition: ease transform 0.2s;
`;

const OptionBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 0;
  background: ${WHITE};
  box-shadow: 0 0 10px 3px ${GRAY};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
`;

const Option = styled.li`
  padding: 5px 10px;
  margin: 0;
  color: ${NAVY};
  user-select: none;
  cursor: pointer;

  &:hover {
    background: ${NAVY};
    color: ${WHITE};
  }
`;
