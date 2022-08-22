import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../../components/modal/Modal';
import ModalPortal from '../../../components/modal/ModalPortal';

function TestModal() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    console.log('modal State', isModal);
  }, [isModal]);

  return (
    <Wrapper>
      <Button onClick={handleModal}>모달 버튼</Button>
      <ModalPortal>{isModal && <Modal onClose={handleModal} />}</ModalPortal>
    </Wrapper>
  );
}

export default TestModal;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 200px;
`;

const Button = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #314260;
  color: white;
  ${({ theme }) => theme.align.flexCenterColumn}
`;
