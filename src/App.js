import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SystemsManager from './pages/insights/useCases/systems manager/SystemsManager.jsx';


function App() {
  return (
    <div className="App">
        <Navbar />
        <SystemsManager />
        <Footer />
    </div>
  );
}

export default App;
