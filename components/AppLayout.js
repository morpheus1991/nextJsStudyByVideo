import React, { useState, useMemo } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

//useCallback - 함수를 캐싱
//useMemo - 값을 캐싱
const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const style = useMemo(() => ({ marginTop: 10 }));

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
            <SearchInput style={{ verticalAlign: "middle" }}></SearchInput>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">회원가입</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div style={style}>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            오른쪽 메뉴
            <a href="www.naver.com" target="_blank" rel="noreferrer noopener">
              Made by Aiden
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
