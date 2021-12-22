import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
