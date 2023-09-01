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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/group" element={<Group />} />
              <Route path="/permission" element={<Permission />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contract" element={<Contract />} />
              <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Container>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
