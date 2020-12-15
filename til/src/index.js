import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

// class Routing extends React.Component {
//     render() {
//         return (
//             <AuthProvider>
//                 <Router>
//                     <nav>
//                         <Link to="/">Home</Link>
//                         <Link to="/signup">Sign Up</Link>
//                         <Link to="/login">Log In</Link>
//                     </nav>
//                     <Switch>
//                         <Route path="/" exact component={ App } />
//                         <Route path="/signup" component={ Signin } />
//                         <Route path="/login" component={ Login } />
//                         <Route component={ NotFound } />
//                     </Switch>
//                 </Router>
//             </AuthProvider>
//
//         )
//     }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


