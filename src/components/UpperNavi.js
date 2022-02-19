import { authService } from "fbsetup";
import { Link, useNavigate } from "react-router-dom";
import "components/UpperNavi.css";

const UpperNavi = ({ isSignedIn }) => {
  let history = useNavigate();
  const signOutHandler = () => {
    authService.signOut();
    history("/");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">만믈리에 메인화면</Link>
          </li>
          <li>
            {isSignedIn ? (
              <p onClick={signOutHandler}>로그아웃</p>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UpperNavi;
