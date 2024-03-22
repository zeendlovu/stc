import './unifiedComms.scss'
import business from '../../../static/images/comms1.jpg'
import dollar from '../../../static/images/icons/dollar-symbol.png'
import zero_hassle from '../../../static/images/icons/checked.png'
import mobile from '../../../static/images/icons/mobile-development.png'
import hosting from '../../../static/images/icons/settings.png'
import video_conf from '../../../static/images/icons/video-call.png'
import livechat from '../../../static/images/icons/live-chat.png'
import callcenter from '../../../static/images/icons/customer-service.png'
import datacenter from '../../../static/images/icons/data-center.png'

import get_started from '../../../static/images/3CX-Hosted-PBX-Adding-Users-768x393.webp'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const handleClick = () => {
      // Handle click event if needed
    };


function UnifiedComms(){
    return(
        <div className='unified'>
          <div className='unifiedContainer'>
                <div className='background'>
                <img src={business} alt='cloud' width='100%' height='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Unified Communication Systems</h1>
                        <p>As proud 3CX partner, we are pleased to present to you a communication system with a difference.</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Driving the Communication Revolution</h3>
                                <p>Unified communications (UC) is a framework for integrating various asynchronous and real-time communication tools. 
                                    Our goal as STC is to enhance business communication, collaboration and productivity. By unifying phone calls, 
                                    video conferencing, SMS, email, Live Chat and so on, users can share and access data all from one centralized 
                                    location, collaborate in real-time and hold audio and video conferences with multiple people. No matter how big
                                     or small your company is, the right Unified Communications solution can take your business communications to 
                                     the next level, helping to improve collaboration, boost productivity, increase mobility and enhance the customer
                                      experience.</p>
                                    <p>Our aim as STC is make communication simple, affordable and flexible. Our UC systems and their 
                                        components can be deployed on premises, in a public or private cloud, or a combination of all three.</p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>Why 3CX Unified Communications</h1>
                </div>
                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
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
                    <h1>Save thousands. Kick the headaches. Keep the features.</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <img src={dollar} alt='cloud' />
                        <div className='container'>
                            <h2>Save upto to 80%</h2>
                        <p>We don’t charge a per user, per month fee. You pay just one low yearly price.</p>     
                        </div>
                                 
                    </div>

                    <div className='service'>
                    <img src={zero_hassle} alt='cloud' />
                        <div className='container'>
                            <h2>Zero Hassle setup</h2>
                            <p>Get 3CX Hosted PBX rolled out in no time, office wide. 
                                With no contract to sign - walk away any time.</p>
                        </div>
                            
                                 
                    </div>

                    <div className='service'>
                    <img src={mobile} alt='cloud' />
                        <div className='container'>
                            <h2>Smartphone and web apps</h2>
                            <p>Get 3CX Hosted PBX rolled out in no time, office wide. 
                            With no contract to sign - walk away any time.</p>
                        </div>
                    </div>
                    <div className='service'>
                    <img src={hosting} alt='cloud' />
                        <div className='container'>
                            <h2>Managed Hosting</h2>
                            <p>Get 3CX Hosted PBX rolled out in no time, office wide. 
                                With no contract to sign - walk away any time.</p>
                        </div>
                            
                    </div>  

                    <div className='service'>
                    <img src={video_conf} alt='cloud' />
                        <div className='container'>
                            <h2>Video Conferencing</h2>
                        <p>Meet smarter with 3CX Meet. No apps, downloads or details. 
                            Easily create, host, or join a meeting. It's free! Why pay extra for Zoom?</p>  
                        </div>
                                          
                    </div>

                    <div className='service'>
                    <img src={livechat} alt='cloud' />
                        <div className='container'>
                            <h2>Live Chat and Messaging</h2>
                            <p>Not just calls. Use the integrated live chat, SMS Texting and WhatsApp solution too. No extra cost or admin.</p>
                        </div>     
                    </div>

                    <div className='service'>
                    <img src={callcenter} alt='cloud' />
                        <div className='container'>
                            <h2>Call Center Solution</h2>
                            <p>Get 3CX Hosted PBX rolled out in no time, office wide. 
                                With no contract to sign - walk away any time.</p>
                        </div>
                            
                    </div>
                    <div className='service'>
                        <img src={datacenter} alt='cloud' />
                        <div className='container'>
                            <h2>World Class data centers</h2>
                            <p>We use and negotiate best prices with first class brands Amazon, 
                            Google and Digital Ocean for guaranteed reliability and innovation.</p>
                        </div>       
                    </div>            
                </div> 

                <div className='get-started'>
                    <div className='left'>
                        <h1>Get started with 3CX Hosted</h1>  
                        <h2>#1 Sign up for 3CX Hosted</h2>  
                        <p>Deploy your Hosted 3CX in no time. All you need to do is sign up and choose the 3CX that’s right for
                            your business. SMB for less than 10 users, PRO or Enterprise for larger companies.</p>

                        <h2>#2 Bring your SIP Trunk</h2>  
                        <p>3CX works with a global network of leading SIP Trunk / VoIP and IP Phone providers committed to 
                            supporting our combined offering. If you already have a SIP Trunk from these providers you can 
                            simply connect it to your 3CX.</p>  

                        <h2>#3 Let a Partner help you</h2>  
                        <p>3CX is a channel sales company with a global network of Partners. Get in touch with STC for 
                            set up support at a reasonable price. Talk to a STC.</p>    
                    </div>
                        <div className='right'>
                        <img src={get_started} alt='cloud' />
                        </div> 
                </div>



                <div className='get-started'>
                    <div className='right'>
                        <img src={get_started} alt='cloud' />
                    </div>

                    <div className='left'>
                        <h1>Your questions answered.</h1>  
                        <Accordion defaultExpanded> 
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <h3>How can 3CX offer its Hosted solution at such low cost?</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                            It’s simple. We negotiate prices with leading hyperscalers including Amazon, Google and DO on 
                            behalf of our 350,000 customers. Secondly, we automate instance management.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            >                           
                            <h3>How can I set 3CX Hosted up?</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                            Super easy… Install. Import Users. Connect your SIP Trunk. Your IT 
                            can handle it all easily in 1 or 2 days
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                            >                           
                            <h3>Can I test if 3CX Hosted is the right solution for my business?</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                            Yes! Select 3CX Dedicated Hosting for Professional and Enterprise feature sets and enjoy a <a href="https://www.3cx.com/ordering/pricing/" style={{textDecoration: "none"}}>2 month trial.</a>
                            </AccordionDetails>
                        </Accordion> 
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                            >                           
                            <h3>Can I use my own private cloud if I want to?</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                            Sure no problem. Choose <a href='https://www.3cx.com/phone-system/' style={{textDecoration: "none"}}>3CX Enterprise</a> with the option to self host in your own private cloud.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5-content"
                            id="panel5-header"
                            >                                                     
                            <h3>What if I only have 5 users? Can I still use 3CX Hosted?</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                            Yes of course! There’s a special <a href='https://www.3cx.com/small-business-phone-system/' style={{textDecoration: "none"}}>small business solution</a> ideal for up to 10 users with a 5-digit 
                            extension for each user. For 20 users + 3CX gives you a variety of <a href="https://www.3cx.com/ordering/pricing/" style={{textDecoration: "none"}}>hosted solutions</a> to choose from.
                             Factors to consider include shared or dedicated hosting along with the features you need for your business.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6-content"
                            id="panel6-header"
                            >                           
                            <h3>Can I use my own private cloud if I want to?</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                            Yes easily! Did you know that <a href='https://www.3cx.com/docs/switch-hosted-pbx/' style={{textDecoration: "none"}}>migrating to 3CX Hosted PBX</a> is as easy as taking a backup and re-deploying your 
                            instance? In most cases it’s a matter of an hour. In cases where an installation is large the restoration of 
                            your backup is post re-deployment.
                            
                            </AccordionDetails>
                        </Accordion>
                    </div>   
                </div>

            <div className='download'>
            <a href="/documents/3cx.pdf" download="example.txt" onClick={handleClick}>Download 3cx Brochure</a>
                </div>
            </div>                 
        </div>
    )
}

export default UnifiedComms;