import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTicket from './Pages/CreateTicket';
import Dashboard from './Pages/Dashboard';
import ViewTicket from './Pages/ViewTicket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/create" element={<CreateTicket />}></Route>
        <Route path="/viewticket" element={<ViewTicket />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
