
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/landing_page/login';
import Volumetric from './components/volumetric/volumetric';
import Dashboard from './components/dashboard/dashboard';
function App() {
  return (
    <div className="w-full ">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/volumetric"  element={<Volumetric/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
