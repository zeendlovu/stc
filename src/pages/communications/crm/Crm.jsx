import './crm.scss'
import crm from '../../../static/images/comms1.jpg'
import Freshsales from '../../../static/images/Freshsales.webp'
import Freshmarketer from '../../../static/images/Freshmarketer.webp'
import Freshdesk from '../../../static/images/Freshdesk.webp'
import Freshchat from '../../../static/images/Freshchat.webp'
import React, { useState } from 'react';

const Tab = ({ label, id, color, onClick }) => {
    return (
      <button className="tablink" onClick={() => onClick(id, color)} style={{ backgroundColor: color }}>
        {label}
      </button>
    );
  };
  
  const TabContent = ({ id, children, activeTab }) => {
    return (
      <div id={id} className="tabcontent" style={{ display: id === activeTab ? 'flex' : 'none' }}>
        {children}
      </div>
    );
  };


function Crm(){
    const [activeTab, setActiveTab] = useState('Freshworks');

  const openPage = (pageName) => {
    setActiveTab(pageName);
  };

    return(
        <div className='crm'>
          <div className='crmContainer'>
                <div className='background'>
                <img src={crm} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h3>Freshworks CRM</h3>
                        <h1>Sales, Marketing, and Support. Better together.</h1>
                        <p>All-in-one CRM that delights your teams and your customers.</p>
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
                    <h1>Every aspect of customer delight. All in one brilliant solution.</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h3>Delight more customers</h3>
                        <p>Freshdesk and Freshchat help you provide effortless, expert customer 
                            service across every channel your customers use</p>                
                    </div>

                    <div className='service'>
                            <h3>Convert more leads</h3>
                            <p>Freshmarketer makes it easy to personalize multichannel marketing campaigns and turn interest into action.</p>
                                
                    </div> 

                    <div className='service'>
                            <h3>Close more deals</h3>
                            <p>Freshsales gets you to the dotted line faster with AI-powered insights that help grow revenue.</p>         
                    </div> 
                </div>

                <div className='tabContainer'>
                    <div className='content'>
                    <Tab label="Freshworks" id="Freshworks" onClick={openPage} />
                    <Tab label="Freshmarketer" id="Freshmarketer" onClick={openPage} />
                    <Tab label="Freshdesk" id="Freshdesk" onClick={openPage} />
                    <Tab label="Freshchat" id="Freshchat" onClick={openPage} />

                    <TabContent id="Freshworks" activeTab={activeTab}>
                    <div className='left'>
                    <img src={Freshsales} alt='cloud' width='80%' height='100%' />
                    </div>
                    <div className='right'>
                        <h1>Make every revenue target, sooner</h1>
                        <p>Freshsales leverages customer data in ways that help you personalize engagement, shorten the sales 
                            cycle, and focus on the leads most likely to sign on the dotted line. All automated, and powered
                             by brilliant AI-driven insights.</p>
                             <a href='https://www.freshworks.com/crm/sales/'>Explore Freshsales</a>
                    </div>  
                    </TabContent>

                <TabContent id="Freshmarketer" activeTab={activeTab}>
                <div className='left'>
                    <img src={Freshmarketer} alt='cloud' width='80%' height='100%' />
                    </div>
                    <div className='right'>
                        <h1>Make every engagement meaningful</h1>
                        <p>Freshmarketer is a multichannel, conversational CRM that makes it easy to get a 360° view 
                            of your customer, and build personalized, contextual experiences that turn “that’s interesting” 
                            into “that’s so me” effectively, predictably, and repeatedly.</p>
                             <a href='https://www.freshworks.com/crm/marketing/'>Explore Freshmarketer</a>
                    </div>  
                </TabContent>

                <TabContent id="Freshdesk" activeTab={activeTab}>
                <div className='left'>
                    <img src={Freshdesk} alt='cloud' width='80%' height='100%' />
                    </div>
                    <div className='right'>
                        <h1>Make every agent a customer champion</h1>
                        <p>Freshdesk simplifies every customer service experience, helping you solve customer inquiries
                             faster and provide highly personalized service. Intelligent automation and workflows eliminate 
                             low-value tasks.</p>
                             <a href='https://www.freshworks.com/freshdesk/'>Explore Freshdesk</a>
                    </div>  
                </TabContent>

                <TabContent id="Freshchat" activeTab={activeTab}>
                <div className='left'>
                    <img src={Freshchat} alt='cloud' width='80%' height='100%' />
                    </div>
                    <div className='right'>
                        <h1>Make every conversation intelligent</h1>
                        <p>Freshchat unifies all your customer conversations in one unified inbox and helps deliver self-service 
                            through no-code easy-to-build chatbots on your website, in-app, and across channels (email, WhatsApp, SMS, and more).</p>
                             <a href='https://www.freshworks.com/live-chat-software/'>Explore Freshchat</a>
                    </div>  
                </TabContent>
                    </div>
                    
                </div>

            </div>                 
        </div>
    )
}

export default Crm;