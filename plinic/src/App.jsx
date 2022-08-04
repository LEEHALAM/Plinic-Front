import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam distinctio omnis fugiat velit blanditiis
      magni praesentium sed esse, nemo accusamus eligendi modi minus saepe inventore dolores voluptatem sint sequi.
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: ${({ theme }) => theme.color.navy}; */
`;
