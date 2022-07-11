import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AuthRedirect from './AuthRedirect';
import { UserContextProvider } from './UserContext';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/auth-redirect" element={<AuthRedirect />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
