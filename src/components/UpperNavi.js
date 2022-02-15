import { Link } from "react-router-dom";

const UpperNavi = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">만믈리에 메인화면</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UpperNavi;
