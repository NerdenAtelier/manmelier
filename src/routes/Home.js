import UpperNavi from "components/UpperNavi";
import { useEffect, useState } from "react";

const Home = ({ isSignedIn }) => {
  return (
    <>
      <UpperNavi />
      {isSignedIn ? (
        <h1>여기가 기본 메인페이지입니다.(로그인 되었음)</h1>
      ) : (
        <h1>여기가 기본페이지입니다.(로그인 안되었음)</h1>
      )}
    </>
  );
};

export default Home;
