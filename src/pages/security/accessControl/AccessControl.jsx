import './accessControl.scss'

function AccessControl(){
    return(
        <div className='access'>
          <div className='accessContainer'>
                <div className='background'></div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Access Control Systems</h1>
                        <p>Designed to work together seamlessly, our access control products provide you with the technology you need 
                            to deliver sophisticated security solutions—from the simplest to the most challenging.</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Trusted Access Control</h3>
                                <p>Our cutting-edge access control systems extend capabilities, improve operational efficiencies and instill confidence that
                                     precious assets, resources and people are secured and protected. STC’s access control solutions enable:</p>
                                     <ul>
                                        <li>Trusted access, to the right people at the right time</li>
                                        <li>Safe environments for employees, visitors and contractors</li>
                                        <li>Increased visibility, with real-time monitoring and cost-control functions</li>
                                        <li>Peace of mind, with expert, personalized concept-to-implementation support</li>
                                     </ul>
                                <p>Backed up with years of experience in the deployment of strong access control solutions for physical and logical 
                                    access, STC is trusted by organizations to provide unparalleled security and protection solutions</p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>Our Services</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Biometric Access Control</h1>
                        <p>Biometric access control looks at things that are unique to each individual to either grant or deny access to a building or 
                            area of a building. This includes fingerprints, retina scans, facial recognition, and/or voice. Now, when you go to open 
                            the door, you scan your finger. The system analyzes the print and sees if it matches one in the database. If it does, then 
                            the access control opens up and lets you in. If there’s no match, then access is denied. It adds an extra layer of protection
                             that helps control who’s allowed where.</p>                
                    </div>

                    <div className='service'>
                            <h1>Radio-Frequency Identification (RFID)</h1>
                            <p>RFID technology makes use of electromagnetic waves to capture and read transmitted data; the information is electronically stored 
                                on a tag that is attached to an object or to the carrier, and that tag’s chip is activated to share its information when it’s near
                                 a reader. These tags can be detected from several feet away by the receiver, making them useful in access control for buildings
                                  with many cardholders. RFID-enabled tags are employed on a very basic level as the identification badges of the workers for 
                                  any company or industry that uses access control systems.</p>
                            
                    </div>

                    <div className='service'>
                            <h1>Pin Code Access Control Systems</h1>
                            <p>Keypad access control systems are simple security systems that require just a PIN code for door 
                                or gate entry with no access card or credential required. Keypad systems are generally used for access 
                                applications with low security and a limited amount of users with authorized access.</p>
                            
                    </div>         

                    <div className='service'>
                            <h1>Man Trap Doors</h1>
                            <p>A mantrap is an access control system that consists of a small space and two interlocking doors. One set of the doors must close 
                                before the other one can be opened so that an individual is briefly ‘trapped’ in the vestibule before clearing the second door. 
                                These vestibules can be manually operated or have automatic systems. In a manual system, a guard would need to lock and unlock 
                                the doors of the mantrap every time someone enters the room or building. For automatic mantraps, some form of identification, 
                                like a key card or security code, is needed to unlock each door.</p>
                                <p>They are used as physical safety solutions for places that need a high level of security. You will often find them at banks, research labs, 
                                    post offices, airports, healthcare facilities, embassies and data centers. They are used to prevent unauthorized people from 
                                    entering or control sterile environments by averting contamination.</p>
                            
                    </div>           
                </div>  
                <   div className='head'>
                        <h1>Our Alarm Systems</h1>
                    </div> 
                
                    <div className='services'>
                    <div className='service'>
                        <h1>Fire Alarm Systems</h1>
                        <p>Fire alarm systems are mostly a legal or insurance requirement. Smoke detectors or carbon monoxide detectors trigger 
                            the alarm to notify everything in the space and turn on the sprinklers. They are designed to discover fires early in 
                            their development when time will still be available for the safe evacuation of occupants. Early detection also plays 
                            a significant role in protecting the safety of emergency response personnel. Property loss can be reduced and downtime 
                            for the operation minimized through early detection because control efforts are started while the fire is still small.
                             Most alarm systems provide information to emergency responders on the location of the fire, speeding the process of 
                             fire control.</p>                
                    </div>

                    <div className='service'>
                            <h1>Radio-Frequency Identification (RFID)</h1>
                            <p>To detect if an unwanted burglar comes visit your office after hours or on weekends, you probably want a burglary 
                                system set up. Those systems typically operate on a simple principle: They get activated with a code or card and
                                 from then on every time someone comes through the door and does not de-activate the alarm in time sets off a 
                                 large scale alarm. Burglar alarm systems come in four main categories which are:</p>
                                 <ul>
                                    <li><b>Bells-only alarms</b> make a noise, but don’t contact anyone (such as the police or you).</li>
                                    <li><b>Dialer burglar alarms</b> automatically dial your phone number, or that of nominated employees, when the alarm is triggered.</li>
                                    <li><b>Smart security systems</b> contact you or employees when the alarm goes off through a smartphone or tablet app.</li>
                                    <li><b>A monitoring contract</b> means you pay a company monthly or annually to take action or call the police if the alarm goes off.</li>
                                 </ul>
                            
                    </div>
          
                </div> 
                    
            </div>                 
        </div>
    )
}

export default AccessControl;