import { useState } from "react";
import AppRouter from "components/AppRouter";
import { authService } from "fbsetup";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log(authService.currentUser);

  return (
    <>
      <AppRouter isSignedIn={isSignedIn} />
      <footer>
        <h6>&copy; {new Date().getFullYear()} Manmelier by Nerden</h6>
      </footer>
    </>
  );
}

export default App;
