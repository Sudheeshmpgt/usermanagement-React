
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/user/login';
import Signup from './components/user/signup';
import Dashboard from './components/user/dashboard';
import Adminlogin from './components/admin/adminLogin';
import Update from './components/admin/update';
import Adduser from './components/admin/adduser';


function App() {
    return (
    
    <div className="App">
     
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin' element={<Adminlogin/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/Adduser' element={<Adduser/>}/>
      </Routes>
       
    </div>
    
  );
}

export default App;

