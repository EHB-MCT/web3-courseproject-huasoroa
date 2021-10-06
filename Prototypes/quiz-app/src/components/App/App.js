import './App.css';
import MainPage from '../MainPage/MainPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from "react-redux";

import MainLayout from '../MainLayout/MainLayout';
import StudentPage from '../StudentPage/StudentPage';
import DocentPage from '../DocentPage/DocentPage';
import RoomPage  from "../RoomPage/RoomPage";
import Store from "../../store/Store";

function App() {
  return (
<Provider store={Store}>

    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/Student" component={StudentPage}/>
          <Route exact path="/Docent" component={DocentPage}/>
          <Route exact path="/Room/:id" component={RoomPage}/>
        </Switch>
      </MainLayout>
    </Router>
</Provider>
  );
}

export default App;
