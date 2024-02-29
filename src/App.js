import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import AccessControl from './pages/security/accessControl/AccessControl.jsx';




function App() {
  return (
    <div className="App">
        <Navbar />
        <AccessControl />
        <Footer />
    </div>
  );
}

export default App;
