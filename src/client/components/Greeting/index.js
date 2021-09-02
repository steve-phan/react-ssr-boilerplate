import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      {/* {JSON.parse(state)} */}

      <h1>Status : {state.text} </h1>
      <button
        onClick={() => {
          console.log('Clicked');
          dispatch({ type: 'hello' });
        }}
      >
        Change
      </button>
    </div>
  );
};

export default index;
