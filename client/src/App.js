import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Main from './Components/Main/Main';
import TopMenu from './Components/TopMenu/TopMenu';
import Menu from './Components/Menu/Menu';
import Queue from './Components/Queue/Queue';
import Rating from './Components/Rating/Rating';
import Tournament from './Components/Tournament/Tournament';
import { checkUser } from './Redux/Actions/signAction';
import AuthRouter from './Components/AuthRouter/AuthRouter';
import MySpin from './Components/MySpin/MySpin';

function App() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
  // <div>
    <Container>
      <TopMenu />

      {/* {user.isFetch
        ? <MySpin />
        : ( */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signin"
          element={(
            <AuthRouter>
              <SignIn />
            </AuthRouter>
)}
        />
        <Route
          path="/signup"
          element={(
            <AuthRouter>
              <SignUp />
            </AuthRouter>
)}
        />
        <Route path="/rating" element={<Rating />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/tournament" element={<Tournament />} />
      </Routes>
      {/* )} */}
      <Menu />
    </Container>
  // </div>
  );
}

export default App;
