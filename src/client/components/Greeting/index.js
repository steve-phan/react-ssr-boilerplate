import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state);
  return (
    <div>
      <h1>Status : {text} </h1>
      <button
        onClick={() => {
          text !== 'Hello World'
            ? dispatch({ type: 'hello' })
            : dispatch({ type: 'goodbye' });
        }}
      >
        Change Status
      </button>
    </div>
  );
};

export default index;
