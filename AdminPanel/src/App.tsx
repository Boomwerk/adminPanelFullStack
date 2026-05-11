import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import IsAuthenticated from './components/auth/IsAuthenticated';

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Inscription" element={<Register />}/>
    <Route path="/connexion" element={<Login />}/>
    <Route path="/dashboard" element={
      <IsAuthenticated>
        <Dashboard />
      </IsAuthenticated>
      }/>

   </Routes>
  )
}

export default App
