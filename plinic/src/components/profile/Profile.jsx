import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Profile({ width, img }) {
  console.log(img);

  return (
    <Wrapper width={width} img={img}>
      {img === undefined && <ProfileImg icon={faCircleUser} width={width} />}
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 107)}px;
  height: ${({ width }) => (width ? width : 107)}px;
  border-radius: 50%;
  background: url(${props => props.img}) no-repeat center/cover;
`;

const ProfileImg = styled(FontAwesomeIcon)`
  font-size: ${({ width }) => (width ? width : 107)}px;
`;
