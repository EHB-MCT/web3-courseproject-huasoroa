import './App.css';
import MainPage from '../MainPage/MainPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import MainLayout from '../MainLayout/MainLayout';
import StudentPage from '../StudentPage/StudentPage';
import DocentPage from '../DocentPage/DocentPage';
import RoomPage  from "../RoomPage/RoomPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/Student" component={StudentPage}/>
          <Route exact path="/Docent" component={DocentPage}/>
          <Route exact path="/Room" component={RoomPage}/>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
