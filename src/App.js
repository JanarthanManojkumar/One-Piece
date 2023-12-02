import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}>Home</Route>
        </Routes>
      </Router>      
    </div>
  );
}


export default App;
