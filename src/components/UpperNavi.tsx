import { useState } from "react";
import { authService } from "../fbsetup";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/UpperNavi.css";

interface Props {
  isSignedIn: boolean;
}

const UpperNavi = ({ isSignedIn }: Props) => {
  const [isMMClicked, setIsMMClicked] = useState(false);
  let history = useNavigate();

  const signOutHandler = () => {
    authService.signOut();
    history("/");
  };
  const toggleHandler = () => {
    setIsMMClicked(!isMMClicked);
  };

  return (
    <>
      {/* Background */}
      <nav className=" bg-gray-800">
        {/* all navmenus */}
        <div className=" container max-w-3xl mx-auto px-5">
          <div className=" flex justify-between">
            {/* logo */}
            <div className=" pl-2 flex items-center space-x-1">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-pink-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
              <p className=" font-logofont text-md place-items-center font-semibold text-gray-200">
                <Link to="/">MANMELIER</Link>
              </p>
            </div>
            {/* primary navbar */}
            <div className="flex items-center py-2">
              <ul className="flex space-x-20 font-navfont text-xs font-semibold text-gray-200">
                <li className=" hover:text-white transition duration-300">
                  <Link to="/manga">만화</Link>
                </li>
                <li className=" hover:text-white transition duration-300">
                  <Link to="/webtoon">웹툰</Link>
                </li>
                <li className=" hover:text-white transition duration-300">
                  <Link to="#">퀴즈</Link>
                </li>
              </ul>
            </div>
            {/* secondary navbar */}
            <div className=" pr-2 flex items-center">
              <p className=" font-navfont text-xs font-semibold text-gray-200 hover:text-white transition duration-300">
                {isSignedIn ? (
                  <Link to="#" onClick={signOutHandler}>
                    로그아웃
                  </Link>
                ) : (
                  <Link to="/login">로그인</Link>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* mobile */}
      </nav>
    </>
  );
};

export default UpperNavi;
