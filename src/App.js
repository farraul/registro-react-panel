
import './App.scss';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Films from './Containers/Films/films';
import Film from './Containers/Film/film';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/film" element={<Film/>}/>


        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
