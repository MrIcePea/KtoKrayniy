import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from './Components/Auth/Auth';
import Exit from './Components/Exit/Exit';
import Menu from './Components/Menu/Menu';
import Queue from './Components/Queue/Queue';
import Registration from './Components/Registration/Registration';
import Tournaments from './Components/Tournament/Tournaments';
import SoloRankings from './Components/Rating/SoloRankings';
import DuoRankings from './Components/Rating/DuoRankings';
import Rankings from './Components/Rating/Rankings';
import Tournament from './Components/Tournament/Tournament';

function App() {
  return (
    <div className="App">
      <Exit />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/rankings" element={<Rankings />}>
          <Route path="/rankings/solo" element={<SoloRankings />} />
          <Route path="/rankings/duo" element={<DuoRankings />} />
        </Route>
        <Route path="/queue" element={<Queue />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/tournaments/:id" element={<Tournament />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
