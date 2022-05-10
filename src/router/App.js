import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

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
