import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ControlTower from './pages/insights/use cases/control-tower/ControlTower.jsx';
//import SystemsManager from './pages/insights/use cases/systems manager/SystemsManager.jsx';
//import Config from './pages/insights/use cases/config/Config.jsx';
//import Test from './pages/insights/use cases/test/Test.jsx';



function App() {
  return (
    <div className="App">
        <Navbar />
        <ControlTower />
        <Footer />
    </div>
  );
}

export default App;
