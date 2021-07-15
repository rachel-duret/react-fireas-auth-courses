import Signup from "./Signup";
import Homepage from './Homepage';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UpdateProfile from "./UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path="/" exact component={ Homepage} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup"  component={ Signup } />
                <Route path="/login"  component={ Login } />
                <Route path="/update-profile"  component={ UpdateProfile } />
                <Route path="/forgot-password"  component={ ForgotPassword} />
              </Switch>
              
            </AuthProvider>
          </Router>
        </div>
    </Container>
    
    
   
  );
}

export default App;
