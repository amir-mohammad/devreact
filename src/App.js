import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import "./App.css"
import MenuBar from './component/componentUI/MenuBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./component/Pages/Home";
import {Container} from 'semantic-ui-react';
import Login from './component/Pages/Login';
import Register from './component/Pages/Register';
import UserState from './context/user/UserState';


function App() {
  return (
   <UserState>
    <Container>
        <Router>
       <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
         
    </Router>
    </Container>
    </UserState>
    
   

  );
}

export default App;
