import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Exit from './Components/Exit/Exit';
import Menu from './Components/Menu/Menu';
import Queue from './Components/Queue/Queue';
import Rating from './Components/Rating/Rating';
import Registration from './Components/Registration/Registration';
import Tournament from './Components/Tournament/Tournament';

function App() {
  return (
    <div className="App">
      <Exit />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/tournament" element={<Tournament />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
