//  import { Button } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Auth from "./pages/AuthPage/Auth";
import PageLayout from "./Layout/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import { useAuthState } from "react-firebase-hooks/auth"
import useAuthStore from "./store/authStore";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const authUser = useAuthStore((state) => state.user);

  // function App() {
  //   const [authuser] = useAuthState(auth);
  // }

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <Auth /> : <Navigate to="/" />}
        />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
