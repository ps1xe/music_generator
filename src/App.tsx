import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRoutes';


function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
     <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </div>
  );
}

export default App;
