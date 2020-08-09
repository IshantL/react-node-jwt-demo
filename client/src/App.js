import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Secret from './secret/Secret';
import withAuth from './hoc/withAuth';
import Logout from './logout/Logout';

 function App() {
  return (
    <div className="nav">
       <BrowserRouter>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/secret">Secret</Link></li>
        <li><Link to ="/login">login</Link></li>
        <li><Link to ="/logout">logout</Link></li>
      </ul>
      <div className="flex-container">
      <Switch>
       
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
          <Route path ="/logout" component ={Logout}/>
         
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
