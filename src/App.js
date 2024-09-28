import logo from './logo.svg';
import './App.css';
import {Main} from './Pages/Main';
import {AddBookPage} from './Pages/AddBookPage';
import {ProfilePage} from './Pages/ProfilePage';
import {RemoveList} from './Pages/RemoveList';
import {LogInPage} from './Pages/LogInPage';
import {RegisterPage} from './Pages/RegisterPage';
import {NavBar} from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className="main-content">
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/add' element={<AddBookPage />} />
              <Route path='/remove' element={<RemoveList />} />
              <Route path='/log' element={<LogInPage />} />
              <Route path='/reg' element={<RegisterPage />} />
              <Route path='/profile' element={<ProfilePage/>} />
            </Routes>
          </div>
      </BrowserRouter>
</div>
  );
}

export default App;
