import { BrowserRouter,Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
