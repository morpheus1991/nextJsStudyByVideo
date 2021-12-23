import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  //   컴포넌트에 프롭스로 넘겨주는 함수는 유즈콜백 사용하기 (최적화 관련)
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  // 컴포넌트에 프롭스로 넘겨주는 함수는 유즈콜백 사용하기 (최적화 관련)

  // 커스텀 훅으로 변경 여지 있음,
  return (
    <Form>
      <div>
        <label htmlFor="user-id"></label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password"></label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <button style={{ marginTop: "10px" }}>noo</button>
        {/* 해당 인라인 스타일은 매번 랜더싱을 다시할 수 있음 */}
        <Button tupe="Primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};
LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.bool.isRequired,
};
export default LoginForm;
