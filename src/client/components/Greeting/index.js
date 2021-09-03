import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(({ color }) => ({
  omgButton: {
    background: color.deep,
  },
}));

const index = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state);
  const classes = useStyles();

  return (
    <>
      <h1>Status : {text} </h1>
      <Button
        className={classes.omgButton}
        onClick={() => {
          text !== 'Hello World'
            ? dispatch({ type: 'hello' })
            : dispatch({ type: 'goodbye' });
        }}
      >
        Change Status
      </Button>
    </>
  );
};

export default index;
