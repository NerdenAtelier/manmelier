import UpperNavi from "components/UpperNavi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "routes/Home.css";

const Home = ({ isSignedIn }) => {
  return (
    <>
      <header>
        <div id="logo">
          <Link to="/">
            <h1>MANMELIER</h1>
          </Link>
        </div>
        <UpperNavi isSignedIn={isSignedIn} />
      </header>
      <div id="main-window">
        {isSignedIn ? (
          <h1>여기가 기본 메인페이지입니다.(로그인 되었음)</h1>
        ) : (
          <h1>여기가 기본페이지입니다.(로그인 안되었음)</h1>
        )}
      </div>
    </>
  );
};

export default Home;
