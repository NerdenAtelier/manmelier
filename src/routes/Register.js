import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "fbsetup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  //input 필드에 변화가 생길 때 작동하는 함수
  const changeHandler = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  //form에서 submit이 발생할 때 작동하는 함수
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      let data;
      data = await createUserWithEmailAndPassword(authService, email, password);
      console.log(data);
      if (data) {
        window.alert("만믈리에 가족이 되신 것을 환영합니다.");
        history("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <fieldset>
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeHandler}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={changeHandler}
            required
          />
          <input type="submit" value="계정 만들기" />
        </form>
      </fieldset>
    </div>
  );
};

export default Register;
