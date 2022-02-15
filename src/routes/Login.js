import { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "fbsetup";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (event) => {
    console.log(event.target.value);
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      let data;
      data = signInWithEmailAndPassword(authService, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const socialLoginHandler = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "twitter") {
      provider = new TwitterAuthProvider();
    } else if (name === "facebook") {
      provider = new FacebookAuthProvider();
    }

    const data = signInWithPopup(authService, provider);
  };

  return (
    <>
      <div>
        <h3>여기는 로그인 페이지입니다.</h3>
      </div>
      <div>
        <fieldset>
          <form autoComplete="off" onSubmit={submitHandler}>
            <input
              name="email"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={changeHandler}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={changeHandler}
              required
            />
            <input type="submit" value="로그인" />
          </form>
          <div>
            <button onClick={socialLoginHandler} name="google">
              구글 계정으로 로그인
            </button>
            <Link to="/register">
              <button>이메일로 계정 만들기</button>
            </Link>
          </div>
        </fieldset>
      </div>
      <div>
        <Link to="/">
          <h6>메인화면으로</h6>
        </Link>
      </div>
    </>
  );
};

export default Login;
