import './unifiedComms.scss'
import business from '../../../static/images/business comms.webp'

function UnifiedComms(){
    return(
        <div className='unified'>
          <div className='unifiedContainer'>
                <div className='background'>
                <img src={business} alt='cloud' width='100%' />
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
                    <h1>Product Features</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Video Conferencing for unlimited users</h1>
                        <p>Most video conferencing solutions require users to download an app or signup and create an account to be able to use their
                             service. Our integrated video conferencing solution is easy to use and app-free. This means that the external participants 
                             you invite will not need to download any apps or create any accounts to be able to join your meeting. Just click on the
                              video conferencing meeting link from their browser and voila! They’re in.</p>
                              <p>Our video conferencing feature has all the features to hold a one-on-one meeting, a sales presentation, 
                                a team brainstorming session, a webinar. It allows you to set up hassle-free online meeting rooms with all
                                 the necessary tools for any given circumstance – employees can even use their mobile devices to join meetings</p>                    
                    </div>

                    <div className='service'>
                            <h1>Engagement Flexibility</h1>
                            <p>With a business VoIP app for Android or iOS, you can literally take your office extension with you anywhere. 
                                A business VoIP App will enable you to answer calls to your office phone extension via your smartphone device.
                                 You can also transfer to colleagues without asking customers to call another number.</p>
                                 <ul>
                                    <li>No additional licensing costs for softphones</li>
                                    <li>Make and receive calls from your smartphone – at no cost</li>
                                    <li>Set your status to available, away and out of office from your smartphone</li>
                                    <li>See the status of your colleagues from anywhere</li>
                                    <li>One number concept</li>
                                 </ul>
                    </div>

                    <div className='service'>
                            <h1>Click to Call Feature</h1>
                            <p>Click-to-call lets users make outbound calls to phone numbers found on web pages, emails and contact lists with just the 
                                click of a button. The browser extension for Chrome and Edge enables you to make phone calls directly from your CRM or 
                                browser with the 3CX Web Client. Users making countless calls every day will save a significant amount of time by
                                 simply clicking on the number to automatically make the call, without having to dial or copy and paste. Click to
                                  Call features include the ability to auto-detect telephone numbers from 7 to 15 digits in length, preventing 
                                  the extension from detecting digits which are not phone numbers</p>
                    </div>
                    <div className='service'>
                            
                    </div>              
                </div> 
              <h2>
                <a href='../../../../public/documents/3cx.pdf' download>
                   Click to download 3CX Brochure for more information 
                </a>
                </h2> 
            </div>                 
        </div>
    )
}

export default UnifiedComms;