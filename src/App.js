import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="page-container">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
