import logo from './logo.svg';
import './App.css';
import NavBarr from './Pages/Shared/NavBarr/NavBarr';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className='App'>
      <NavBarr></NavBarr>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
