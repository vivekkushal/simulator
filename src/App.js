import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import LicenseRequest from './pages/licenseRequest/LicenseRequest';
import ChangeRequest from './pages/changeRequest/ChangeRequest';
import UserListing from './pages/userListing/UserListing';
import User from './pages/user/User';
import Sim from './pages/sim/Sim';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="license-request" element={<LicenseRequest />} />
          <Route path="change-request" element={<ChangeRequest />} />
        </Route>
        <Route path="/users">
          <Route index element={<UserListing />} />
          <Route path=":userId" element={<User />} />
          <Route path=":userId/:simId" element={<Sim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
