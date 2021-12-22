import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
const App = ({ Component }) => {
  return (
    <div>
      <Head>
        <title>NodeBird</title>
      </Head>
      <p>공통메뉴 app.js</p>
      {/*
       app.js 와  layout.js의 차이 
       app.js는 글로벌 공통
       layout.js는 부분 공통
      */}
      <Component />;
    </div>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default App;
