import './microsoft.scss'
import windows from '../../../static/images/aws-background.jpg'

function Microsoft(){
    return(
        <div className='microsoft'>
          <div className='microsoftContainer'>
                <div className='background'>
                <img src={windows} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Windows on AWS</h1>
                        <p>The most popular, secure, and reliable cloud for Windows</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                                <p>Migrate Windows Workloads to AWS the key to success when it comes to helping our customers migrate 
                                    their Microsoft workloads to AWS cloud services is simple. We help maintain application availability
                                     and data integrity while migrating workloads efficiently to public or hybrid cloud environments.</p>
                                    <p>Whether you are moving on-prem workloads – or migrating between cloud providers – STC's project
                                         management, incredibly skilled technical staff, and our Workload Migration Services remove 
                                         risk and accelerate migration. We utilize the best practices we’ve developed while supporting 
                                         the world’s most complex cloud environments to ensure your migration path is efficient and 
                                         secure.</p>
                                    <p>Companies and organizations choose AWS cloud based technologies simply because AWS remains the
                                         most trusted, and comprehensive infrastructure and service offering for innovating in the 
                                         cloud, period. And, when selecting an AWS partner, STC continues to stand out and be 
                                         recommended by AWS and our customers, again and again.</p>
                        </div>
                    </div>
                </div>
                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Why Organizations choose STC for Microsoft on AWS</h3>
                                <p>Migrating Microsoft workloads to the cloud has proven advantages and benefits, but getting there can 
                                    be a challenging and difficult process. At STC, we recognize and deal with these challenges 
                                    head-on to help you make the right decisions and support you every step of the way. When asked, 
                                    STC is the difference-maker for our customers, because we simply have the best combination of 
                                    skills, experience, delivery processes, and economics that removes risk and creates success 
                                    stories for our customers.</p>
                                    <h2>Migration Challenges:</h2>
                                    <ul>
                                        <li>When connecting Windows workloads with the AWS native service offerings, there are many different options available within AWS for your infrastructure, application and database architecture. How you leverage those services and make the right choices is not always straightforward.</li>
                                        <li>Your internal staff are heavily focused on a mix of day to day operations and strategic business priorities and may not have the time to take on the additional overhead of a migration.</li>
                                        <li>Your staff may not have the necessary AWS or Cloud skills and experience but need to be part of the process to provide their application and business knowledge during the process and will need to support the new environment.</li>
                                        <li>Above all, you need to keep the business running smoothly during the process.</li>
                                    </ul>
                        </div>
                    </div>
                </div>

                <div className='head'>
                    <h1>How STC Can Help</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Microsoft and Migration Expertise</h1>
                        <p>For nearly a decade, STC has been 100% AWS focused, developing expertise in migrating hundreds 
                            and hundreds of mission-critical custom legacy applications and data workloads including data 
                            warehouses in over hundreds of project engagements. We have a deep understanding of AWS technologies 
                            and Best Practices and how to best apply to them to your business.</p>                    
                    </div>

                    <div className='service'>
                            <h1>Engagement Flexibility</h1>
                            <p>STC offers a variety of engagement models allowing customers like you to migrate at your pace, engage 
                                at your choice with onshore/offshore Microsoft certified professionals organized in STC lead teams, 
                                bundled teams or staff augmentation to complement your organization during its migration journey.
                                 Our Solution Architects take the time to understand your current environment and your business
                                  drivers and then help recommend the right migration strategy based on Microsoft and AWS Best Practices.</p>
                    </div>

                    <div className='service'>
                            <h1>Team and Business Impact</h1>
                            <p>STC has supported a variety of customers, enabling customer organizations like yours to reach their 
                                business goals as well as enabling their teams with virtualized infrastructure operation methods to
                                 become highly Cloud proficient. Through our OneTeam process, we work in close collaboration and 
                                 coordination with your current IT teams and can provide the required knowledge transfer, documentation 
                                 and confidence needed to successfully maintain the new environment.</p>
                    </div>

                    <div className='service'>
                            <h1>Agile Enablement</h1>
                            <p>We use the Agile methodology to quickly and iteratively start to add business value and address the
                                 shifting nature of business requirements, while ensuring continuous improvement in both the product 
                                 and the process used. We engage you and your teams in the Agile processes as part of the OneTeam 
                                 approach so that collaboration and communication are optimized.</p>
                    </div>                
                </div> 

                <div className='head'>
                    <h1>Services and offerings</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Assessement</h1>
                        <p>Get clarity on where are you are starting and create a TCO model to build business 
                            justification for your migration project.</p>                    
                    </div>

                    <div className='service'>
                            <h1>Migrate and Modernize</h1>
                            <p>Migrate waves of applications, operate and optimize your cloud environment and applications</p>
                    </div>
                    <div className='service'>
                            <h1>Cloud migration</h1>
                            <ul>
                                <li>Application specific | Virtual Desktops</li>
                                <li>Data center wide</li>
                                <li>Infrastructure refresh</li>
                            </ul>
                    </div>  
                    <div className='service'>
                            <h1>Disaster Recovery</h1>
                            <ul>
                                <li>New DR site(s)</li>
                                <li>Replace existing DR site(s)</li>
                                <li>Complement Existing DR site(s)</li>
                            </ul>
                    </div>              
                </div>   
            </div>                 
        </div>
    )
}

export default Microsoft;