import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Header from "./components/Header";
import Login from './pages/Login';
import ProducedRouter from './utils/ProductedRouter';

function App() {
  return <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProducedRouter><Home/></ProducedRouter>} ></Route> 
        <Route path="/contact" element={<ProducedRouter><Contact /></ProducedRouter>}  ></Route>
        <Route path="/about" element={<ProducedRouter><About /></ProducedRouter>}  ></Route>
         <Route path="/dashboard" element={<ProducedRouter><Dashboard /></ProducedRouter>}  ></Route>
         <Route path="/errorpage" element={<ProducedRouter><ErrorPage /></ProducedRouter>}  ></Route>
         <Route path='/login' element={<Login/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  
}

export default App;
