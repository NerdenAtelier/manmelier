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
      <nav className="navBar">
        <div className="navBar_logo">
          <Link to="/">
            <h1>MANMELIER</h1>
          </Link>
        </div>
        <ul className="navBar_menus">
          <li className="navBar_menus_menu">
            <Link to="/">만화</Link>
          </li>
          <li className="navBar_menus_menu">
            <Link to="/">웹툰</Link>
          </li>
          <li className="navBar_menus_menu">
            <Link to="/">퀴즈</Link>
          </li>
        </ul>
        <>
          <div className="navBar_signIn">
            {isSignedIn ? (
              <p id="signOut" onClick={signOutHandler}>
                로그아웃
              </p>
            ) : (
              <p id="signIn">
                <Link to="/login">로그인</Link>
              </p>
            )}
          </div>
        </>
      </nav>
    </>
  );
};

export default UpperNavi;
