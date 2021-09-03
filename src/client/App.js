import React, { useEffect } from 'react';
import Greeting from 'src/client/components/Greeting';

const App = () => {
  useEffect(() => {
    const ssCSS = document.querySelector('#ssr-css');
    if (ssCSS) {
      ssCSS.parentElement.removeChild(ssCSS);
    }
  }, []);
  return (
    <>
      <h1>A React SSR with Redux Material-UI Boilerplate </h1>
      <Greeting />
    </>
  );
};

export default App;
