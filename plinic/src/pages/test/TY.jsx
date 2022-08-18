import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { posts } from '../../components/pagination/posts';
import Pagination from '../../components/pagination/Pagination';

function TY() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    console.log(`${pageNumber}번째 페이지입니다.`);
  };

  useEffect(() => {
    setData(posts);
  }, []);

  return (
    <div>
      <Posts>
        {data &&
          data.slice(10 * (activePage - 1), 10 * (activePage - 1) + 10).map(d => (
            <PostBox key={d.id}>
              <ImageBox>
                <Likes>{d.likes}</Likes>
              </ImageBox>
              <TextBox>
                <div>{d.title}</div>
                <div>{d.nickname}</div>
              </TextBox>
            </PostBox>
          ))}
      </Posts>
      <Pagination activePage={activePage} totalItemsCount={data.length - 1} handlePageChange={handlePageChange} />
    </div>
  );
}

export default TY;

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 25px;
  column-gap: 18px;
`;

const PostBox = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ImageBox = styled.div`
  width: 140px;
  height: 140px;
  background: gray;
  position: relative;
  border-radius: 10px;
`;

const Likes = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div:first-child {
    font-size: 16px;
  }
  div:last-child {
    font-size: 14px;
  }
`;
