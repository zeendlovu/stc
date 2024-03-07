import './crm.scss'
import crm from '../../../static/images/crm.png'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react'

function Crm(){
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <div className='crm'>
          <div className='crmContainer'>
                <div className='background'>
                <img src={crm} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>CRM Services</h1>
                        <p>Deliver the best omnichannel customer service. At STC we offer one platform with 
                            everything you need to serve customers and grow your business.</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Experience the power of efficiency with Freshdesk</h3>
                                <p>Freshdesk is built to make customer engagement accessible to businesses of all sizes, so you can deliver an 
                                    effortless customer experience at scale without the cost and complexity of legacy software. It allows you to 
                                    engage customers across every touchpoint with a 360-degree view of the customer—across e-mail, phone, 
                                    chat, social media, and more. You can also automate and streamline complex workflows and answer 
                                    customer queries with no-code bots for faster resolutions and happier customers. Our aim is to make
                                     it easy for your customers to reach you!</p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>Products Supported</h1>
                </div>
                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                        <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Item One" value="1" />
      <Tab label="Item Two" value="2" />
      <Tab label="Item Three" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1">Item One</TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
</TabContext>
                                <p>Choosing a phone system for your business requires careful consideration. You want it to serve your business 
                                    well, now and into the future. Your telephone system must be able to scale with your business’ growth, 
                                    without breaking the bank in the process. Our unified communication system is an open-platform, VoIP 
                                    communication system that works with popular IP Phones and SIP trunks whether on premise or in the cloud. 
                                    It eliminates the cost and management headaches of outdated, traditional phone systems or the limitations 
                                    of shared cloud PBXs.</p>
                                    <p>You decide where to run your communication system. You can run the system on an 
                                        existing server or in the cloud, either way you are in control.</p>
                        </div>
                    </div>
                </div>

                <div className='head'>
                    <h1>Product Features</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Samsung Digital Communication System (DCS) Telephones</h1>
                        <p>The Samsung Digital Communication System (DCS) Telephones offer a user friendly design with easy access to 
                            system features. Samsung Handsets can be connected to telephone systems ( IP or PBX ) to allow a full 
                            connectivity and collaboration among offices and businesses.</p>
                        <p>This digital telephone is intended to be connected as a digital extension of a Samsung PABX telephone system 
                            (OfficeServ7030,7070,7100,7200 and 7400). The connection allows voice communication between the central
                             processor unit and the telephone. It is not intended to be connected to any other telephone system or 
                             the public tele-phone network. Some of the features include three way conference call and voicemail 
                             features.</p>                
                    </div>

                    <div className='service'>
                            <h1>Samsung OfficeServ 7030 IP PABX Phone System</h1>
                            <p>OfficeServ 7030 is the best communication product for offices with 4 to 20 lines and provides 
                                advanced functions including voice and applications. Users can enjoy various phone functions
                                 and applications using the various devices such as digital phones, IP phones, WLAN phones,
                                  PCs and servers.</p>
                                 <ul>
                                    <li>Offers small businesses an unrivalled level of features and functional flexibility</li>
                                    <li>Offer 1 to 20 extensions</li>
                                    <li>Can be configured with a full range of analog, digital and IP trunks and extensions</li>
                                    <li>Affordable & flexible configuration options, Analogue or Digital Capabilities</li>
                                    <li>Caller ID, name and number available</li>
                                    <li>VoIP Technology.</li>
                                 </ul>
                    </div>

                    <div className='service'>
                            <h1>Samsung OfficeServ 7070 IP PABX Phone System</h1>
                            <p>Samsung OfficeServ 7070 is an IP-PBX optimized for small and medium sized businesses having less than 50 employees.
                            It supports not only VoIP communications, but works perfectly with existing communication infrastructures</p>
                            <ul>
                                    <li>Supports all the call functions of the existing PBX Full compatibility with the OfficeServ 
                                        7000 series using identical S/W and terminals</li>
                                    <li>Scalability of multiple service boards into the universal slot</li>
                                    <li>Various line groups can be configured through expansion in 4-line unit</li>
                                    <li>Supports 8 VoIP channels without additional equipment</li>
                                    <li>An integrated VoIP network can provide seamless collaboration with a remote office</li>
                                    <li>Supports Voice Mail, Auto Attendant, and CID function without additional equipment Equipped 
                                        with Internal MOH, External MOH, Paging, and Contact</li>
                                 </ul>
                    </div>
                    <div className='service'>
                        <h1>Samsung OfficeServ 7400 IP PABX Phone System</h1>
                            <p>The Samsung OfficeServ 7400 is Samsung’s premier telephone system. The OfficeServ 7400 features a robust feature
                                 package including converged voice and data, VoIP, unified messaging and wireless keysets.</p>
                            <ul>
                                    <li>Simultaneously supports traditional voice communication, VoIP, IP-based data communication and wireless 
                                        solutions through wireless LANs</li>
                                    <li>Provides gigabit Ethernet backbone alongside Layer 2/3 LAN switching capabitlies to carry your evolving traffic needs</li>
                                    <li>Integrates your firewall, VPN, and intrusion Detection System (IDS)</li>
                                    <li>Feature Rich functionality with call forwarding, caller ID, call overflow options, speed calling and wireless service options</li>
                                    <li>Supports up to 480 phones in a single site or thousands of users in a multisite network</li>
                                    <li>Handles any of Samsung’s wired, wireless, digital, IP and analogue range of handsets</li>
                                    <li>Perfect for medium to large businesses</li>
                                 </ul>
                    </div>              
                </div>  
            </div>                 
        </div>
    )
}

export default Crm;