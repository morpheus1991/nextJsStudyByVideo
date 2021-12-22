import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu } from "antd";
const AppLayout = ({ children }) => {
  return (
    <div>
      {/*
       app.js 와  layout.js의 차이 
       app.js는 글로벌 공통
       layout.js는 부분 공통
      */}
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
