
import './App.scss';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Films from './Containers/Films/films';
import Film from './Containers/Film/film';
import Admin from './Containers/Admin/Admin';
import Footer from './Components/Footer/Footer';

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
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
