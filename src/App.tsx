import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom'
import Navbar from './Components/layout/Navbar/Navbar';
import { Home } from "./Components/pages/Home/Home";
import { Users } from './Components/pages/Users/users';
import { Group } from './Components/pages/Group/Group';
import { Permission } from './Components/pages/Permission/Permission';
import { Schedule } from './Components/pages/Schedule/Schedule';
import { Services } from './Components/pages/Services/Services';
import { Contract } from './Components/pages/Contract/Contract';
import Container from './Components/layout/Container/Container';
import { Footer } from './Components/layout/Footer/Footer';
import { PermissionCreate } from './Components/pages/Permission/PermissionCreate';
import { useContext } from 'react';
import { authenticationContext } from './contexts/Authentication/AuthenticationContext';
import { Login } from './Components/pages/Login/Login';
import { Logout } from './Components/pages/Logout/logout';
import { PermissionProvider } from "./contexts/Permission/PermissionProvider";

function App() {

  const auth = useContext(authenticationContext);

  if (!auth.user) {
    return (
      <BrowserRouter>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Container>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/group" element={<Group />} />
            <Route path="/permission" element={<PermissionProvider><Permission /></PermissionProvider>} />
            <Route path="/permission/create" element={ <PermissionProvider><PermissionCreate /></PermissionProvider>} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/logout" element={<Logout />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
