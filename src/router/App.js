import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/registro" element={ <Registration />} />
      </Routes>
    </div>
  );
}

export default App;
