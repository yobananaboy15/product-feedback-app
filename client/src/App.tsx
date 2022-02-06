import { AppContainer } from './components/AppContainer/AppContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './routes/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
