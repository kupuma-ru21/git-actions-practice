import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.VFC = () => {
  return (
    <>
      <a href="https://github.com/kupuma-ru21" target="_blank" rel="noreferrer">
        <h4>GitHub</h4>
      </a>
      <Link to="zenn_article">
        <h4>Zenn</h4>
      </Link>
    </>
  );
};

export default Home;
