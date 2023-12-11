import logo from './logo.svg';
import './App.css';
import ListPersonaComponent from './component/ListPersonaComponent';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" Component={ListPersonaComponent}></Route>
              <Route path="/persona" Component={ListPersonaComponent}></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
