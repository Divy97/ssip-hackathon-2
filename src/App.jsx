import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/navigationBar/navigation.component";
import Library from "./components/library/library.component";
import Profile from "./components/profile/profile.component";

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/home" />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

// profile
// attendenc
