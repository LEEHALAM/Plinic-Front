import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home, CE, TY, HL } from './pages';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CE" element={<CE />} />
          <Route path="/TY" element={<TY />} />
          <Route path="/HL" element={<HL />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
