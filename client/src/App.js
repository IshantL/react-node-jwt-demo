import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Secret from './Secret';
import withAuth from './withAuth';
import Logout from './Logout';

 function App() {
  return (
    <div>
       <BrowserRouter>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/secret">Secret</Link></li>
        <li><Link to ="/login">login</Link></li>
        <li><Link to ="/logout">logout</Link></li>
      </ul>
     
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
          <Route path ="/logout" component ={Logout}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
