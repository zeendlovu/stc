import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';

//Cloud Section
import Migration from './pages/cloud/migration/Migration.jsx'
import Sap from './pages/cloud/sap/Sap.jsx'
import Microsoft from './pages/cloud/microsoft/Microsoft.jsx'

//Commnunication Section
import Commnunications from './pages/communications/Communications.jsx'
import Crm from './pages/communications/crm/Crm.jsx'
import Samsung from './pages/communications/samsung/Samsung.jsx'
import UnifiedComms from './pages/communications/unified/UnifiedComms.jsx'

//Security Section
import Security from './pages/security/Security.jsx'
import Access from './pages/security/accessControl/AccessControl.jsx'
import Cctv from './pages/security/cctv/Cctv.jsx'
import VideoAnalytics from './pages/security/videoAnalytics/VideoAnalytics.jsx'

//Insights
import Insights from './pages/insights/Insights.jsx'
import Config from './pages/insights/useCases/config/Config.jsx'
import ControlTower from './pages/insights/useCases/control-tower/ControlTower.jsx'
import SystemsManager from './pages/insights/useCases/systems manager/SystemsManager.jsx'

//Insights - customer stories
import Gain from './pages/insights/customer-stories/gain/Gain.jsx'
import Simbisa from './pages/insights/customer-stories/simbisa/Simbisa.jsx'
import Profeeds from './pages/insights/customer-stories/profeeds/Profeeds.jsx'
import Tvsh from './pages/insights/customer-stories/tvsh/Tvsh.jsx'

//About
import Story from './pages/about/our-story/Story.jsx'
import Management from './pages/about/our-management/Management.jsx'

//About
import Contact from './pages/contact/Contact.jsx'



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
                <Routes>
                <Route exact path="/" element={<Home />} />
                  {/* Cloud Section */}
                    <Route path="/cloud/migration" element={<Migration />} />
                    <Route path="/cloud/sap" element={<Sap />} />
                    <Route path="/cloud/microsoft" element={<Microsoft />} />     
                </Routes>

                <Routes>
                  {/* Communications Section */}
                  <Route exact path="/communications" element={<Commnunications />} />
                    <Route path="/communications/crm" element={<Crm />} />
                    <Route path="/communications/samsung" element={<Samsung />} />
                    <Route path="/communications/unified-comms" element={<UnifiedComms />} />
                </Routes>

                <Routes>
                  {/* Security Section */}
                  <Route exact path="/security" element={<Security />} />
                    <Route path="/security/access-control" element={<Access />} />
                    <Route path="/security/cctv" element={<Cctv />} />
                    <Route path="/security/video-analytics" element={<VideoAnalytics />} />
                </Routes>

                <Routes>
                  {/* Insights Section - Use Cases*/}
                  <Route exact path="/insights" element={<Insights />} />
                    <Route path="/insights/systems-manager" element={<SystemsManager />} />
                    <Route path="/insights/config" element={<Config />} />
                    <Route path="/insights/control-tower" element={<ControlTower />} />
                </Routes>

                <Routes>
                  {/* Insights Section - Use Cases*/}
                  <Route exact path="/use-case" element={<Insights />} />
                </Routes>

                <Routes>
                  {/* Insights Section - Case Studies */}
                  <Route exact path="/insights" element={<Insights />} />
                    <Route path="/insights/gain" element={<Gain />} />
                    <Route path="/insights/simbisa" element={<Simbisa />} />
                    <Route path="/insights/profeeds" element={<Profeeds />} />
                    <Route path="/insights/tvsh" element={<Tvsh />} />
                </Routes>

                <Routes>
                  {/* About Section */}
                  <Route path="/about/our-story" element={<Story />} />
                  <Route path="/about/our-management" element={<Management />} />
                </Routes>

                <Routes>
                    {/* Contact Section */}
                    <Route path="/contact-us" element={<Contact />} />
                </Routes>

            </Router>
        <Footer />
    </div>
  );
}

export default App;
