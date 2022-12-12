import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Home from './Home';
import Leads from './Leads';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Servicerequests from './Servicerequests';
import Contacts from './Contacts';
import Createlead from './Createlead';
import Createservicereq from './Createservicereq';
import Createcontact from './Createcontact';
import Updateservicereq from './Updateservicereq';
import Updatelead from './Updatelead';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portal' element={<Portal />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='leads' element={<Leads/>}></Route>
          <Route path='servicerequests' element={<Servicerequests/>}></Route>
          <Route path='contacts' element={<Contacts/>}></Route>
          <Route path='create/service-request' element={<Createservicereq/>}></Route>
          <Route path='create/lead' element={<Createlead/>}></Route>
          <Route path='create/contact' element={<Createcontact/>}></Route>
          <Route path='update/service-request/:servicerequestid' element={<Updateservicereq/>}></Route>
          <Route path='update/lead/:leadid' element={<Updatelead/>}></Route>
        </Route>
        <Route path='/user/forgotpassword' element={<Forgotpassword/>}></Route>
        <Route path='/user/reset-password-page' element={<Resetpassword/>}></Route>
      </Routes>

    </>
  );
}

export default App;
