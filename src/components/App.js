import { useEffect, useState } from "react";
import AppRouter from "components/AppRouter";
import { authService } from "fbsetup";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log(authService.currentUser);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsSignedIn(user);
      } else {
        setIsSignedIn(false);
      }
      setInit(true);
    });
  });

  return (
    <>
      {init ? <AppRouter isSignedIn={isSignedIn} /> : "Initializing..."}
      <footer>
        <h6>&copy; {new Date().getFullYear()} Manmelier by Nerden</h6>
      </footer>
    </>
  );
}

export default App;
