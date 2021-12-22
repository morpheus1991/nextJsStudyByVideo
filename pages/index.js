import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
  return (
    <AppLayout>
      <Head>
        <title>메인페이지에 오신것을 환영합니다.</title>
        {/* app.js것보다 우선순위 높음 (오버라이딩)??? */}
      </Head>
      <div>index</div>
    </AppLayout>
  );
};

export default Home;
