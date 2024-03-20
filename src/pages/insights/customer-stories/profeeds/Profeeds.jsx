import './profeeds.scss'
import profeeds from '../../../../static/images/profeeds.png'
import partner from '../../../../static/images/pexel.jpeg'

function Profeeds(){
    return(
        <div className='profeeds'>
          <div className='profeedsContainer'>
                <div className='background'>
                <img src={partner} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Profeeds</h1>
                        <p>2-tier architecture deployment</p>
                    </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Excutive Summary</h1>
                        <p>Profeeds was founded in 2007 as a stock feed manufacturing plant, initially 
                            producing, 150MT of chicken feed per month for a few commercial poultry 
                            farmers. Fast-forward to 2023, they are Zimbabwe's best integrated agri-business 
                            focusing on both income generating options and solutions to all 
                            aspects of stock feed farming practices. Profeeds have a nationwide retail 
                            network encompassing 52 stores which service small and medium scale 
                            farmers in addition to commercial farmer customers. Profeeds was looking for 
                            a solution that would help them reduce overhead costs of maintaining and 
                            operating persistent data centres. STC recommended that they embark on a
                            cloud migration journey which would start with one windows production 
                            workload.
                        </p>              
                    </div>

                    <div className='service1'>
                    <h3 style={{ padding: '0px 100px 10px' }}>www.profeeds.co.zw</h3>
                    <img src={profeeds} alt='cloud' width='70%' height='70%' />
                    </div>

                    <div className='service'>
                        <h1>Problem Statement</h1>
                        <h3 style={{ padding: '10px' }}>Reduce the cost of running Enterprise Workload whilst accelerating the product’s time to market</h3>
                        <p>Profeeds was looking for a solution that would reduce the overhead costs of 
                            maintaining and operating persistent their data centres. Profeeds also wanted 
                            to accelerate their time-to-market in order to gain a competitive advantage.
                            Profeeds was looking at redesigning its enterprise architecture on the newest 
                            and latest infrastructure to ensure increased agility and allowed scalability.
                        </p>   
                        <h1>Why AWS and Standard Telephones & Cables</h1>
                        <p>AWS is by a considerable margin the world’s most widely adopted cloud 
                            platform which provides businesses with a highly available, scalable, agile and 
                            low-cost infrastructure. Profeeds wanted to leverage AWS’ flexible pricing 
                            model which would allow them to launch and run production, staging and testing 
                            environments quickly at a low cost. </p> 
                        <p>Profeeds partnered with STC, an advanced AWS consulting partner with the 
                            required expertise to run and manage workloads in the cloud and thus allowing 
                            Profeeds to focus on its core business without having to worry about managing 
                            infrastructure.</p>            
                    </div>
                    <div className='service1'>
                        <h3>Profeeds: </h3>
                        <p>
                        Over the last 15 years 
                        Profeeds have dedicated 
                        its focus towards 
                        empowering small-scale 
                        farmers. With continued 
                        research and 
                        development, and regular 
                        state-of-the-art plant 
                        upgrades, modern 
                        technology and expertise, 
                        its acclaimed stock 
                        feeding programs are sort 
                        after by these farmers as 
                        well as commercial 
                        growers nationwide.
                        </p>
                        <h3 style={{ padding: '40px 0px 0px' }}>Industry: Manufacturing</h3>
                        <h3>Problem:</h3>
                        <p>Excessive cost of running</p>
                        <p>Enterprise workloads</p>
                        <p>Long product go to market time</p>
                    </div>

                    <div className='solution'>
                            <h1>Proposed Solution</h1>
                            <p>STC designed a 2-tier web architecture solution that separated the windows-based web application from the SQL database, making the entire solution highly 
                                resilient by removing a single point of failure. The windows application is set up 
                                behind an auto-scaling group that would increase and decrease resources 
                                based on demand. The solution leverages AWS elastic compute instances for 
                                the frontend application eliminating the need to invest in hardware upfront, so 
                                you can develop and deploy applications faster. AWS Relational Database 
                                service was used to easily set up, operate and scale the SQL database.</p>
                            <p>
                                All the production services were tagged under a common resources group for 
                                ease of node management using the systems sessions manager. To meet the 
                                client’s Recovery Time and Point objectives, AWS Backup a fully managed 
                                backup service was implemented using resource groups to target all production 
                                services.
                            </p>
                            <h3>Benefits Summary</h3>
                            <ul>
                                <li>The business can focus more efforts on product innovation</li>
                                <li> Huge cost savings of at least 35% through partnering with a managed services provider</li>
                                <li> Highly available systems with little to no downtime i.e. 99,99% uptime</li>
                            </ul>

                                <h1>The Result</h1>
                            <p>Teaming with STC, Profeeds now has a modern infrastructure with 99.99% 
                                uptime. Profeeds no longer has to worry about managing infrastructure and 
                                Microsoft licenses utilizing the various pricing models in AWS that allowed 
                                them to pay only for the resources they were consuming. Running in the AWS
                                cloud also increased scalability, improved agility, and helped map a path 
                                toward modernization that will position the company to be more innovative. In 
                                the AWS cloud, Profeeds managed to meet their time-to-market requirements 
                                by a considerable margin thus meeting their customers’ expectations way 
                                ahead of schedule. AWS Backup enabled Profeeds to meet backup retention 
                                period requirements of 3 months.</p>
                            
                    </div>          
                </div>  
            </div>                 
        </div>
    )
}

export default Profeeds;