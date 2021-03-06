
import './App.scss';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Panel_Admin from './Components/Panel_Admin/Panel_Admin';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Films from './Containers/Films/films';
import Film from './Containers/Film/film';
import Admin from './Containers/Admin/Admin';
import Footer from './Components/Footer/Footer';
import Adminsecond from './Containers/Adminsecond/Adminsecond';
import Adminthird from './Containers/Adminthird/Adminthird';
import Adminfour from './Containers/Adminfour/Adminfour';
import Adminfive from './Containers/Adminfive/Adminfive';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="/film" element={<Film/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/adminsecond" element={<Adminsecond/>}/>
          <Route path="/adminthird" element={<Adminthird/>}/>
          <Route path="/adminfour" element={<Adminfour/>}/>
          <Route path="/panel-admin" element={<Panel_Admin/>}/>
          <Route path="/panelfive" element={<Adminfive/>}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
