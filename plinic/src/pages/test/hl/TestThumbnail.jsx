import React from 'react';
import Thumbnail from '../../../components/thumbnail/Thumbnail';
import data from '../../../components/thumbnail/dummyData';

function TestThumbnail() {
  console.log(data);
  return (
    <>
      {data.map(el => (
        <Thumbnail key={el.id} img={el.thumbnail} />
      ))}
      {data.map(el => (
        <Thumbnail key={el.id} img={el.thumbnail} post likes={el.like} likeState={el.likeState} />
      ))}
    </>
  );
}

export default TestThumbnail;
