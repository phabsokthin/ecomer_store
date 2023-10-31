import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import SidebarCart from './components/SidebarCart';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>

      <Navigation />
      <SidebarCart />
    <Toaster
    
    position="top-center"
    reverseOrder={false}

    />
    </>
  );
}

export default App;
