import './simbisa.scss'
import simbisa from '../../../../static/images/simbisa.jpg'
import partner from '../../../../static/images/pexel.jpeg'

function Simbisa(){
    return(
        <div className='simbisa'>
          <div className='simbisaContainer'>
                <div className='background'>
                <img src={partner} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Simbisa Brands Limited</h1>
                        <p>Predictiv ERP deployment</p>
                    </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Excutive Summary</h1>
                        <p>Simbisa means to strengthen and empower, derived from a Shona word that 
                            embodies a rally for strength and power. The name represents what the 
                            business and its staff stand for: to create and sustain a strong and 
                            empowered brand that is recognized across all regions. Expansion into the 
                            region is critical to growth and achieve our goal of spreading our footprint 
                            into Africa as a diversified Pan-African business.
                        </p>              
                    </div>

                    <div className='service1'>
                    <h3 style={{ padding: '0px 100px 10px' }}>www.simbisabrands.com</h3>
                    <img src={simbisa} alt='cloud' width='70%' height='70%' />
                    </div>

                    <div className='service'>
                        <h1>Problem Statement</h1>
                        <p>Simbisa Brands Limited (‘Simbisa’ or ‘Simbisa Brands’) has a small, 
                            professional, agile IT team and engaged with Standard Telephones and 
                            Cables (‘STC’) to find a hosting solution for their single instance group-wide 
                            ERP system, Predictiv. To enable a strong focus on their core business, they 
                            wanted to eliminate the pressure and complications that are associated with
                            running and managing a local data centre. They, therefore, needed a 
                            platform which would enable them to host and access their Predictiv ERP
                            system.
                        </p>   
                                   
                    </div>
                    <div className='service1'>
                        <h3>Simbisa Brands</h3>
                        <p>
                        Simbisa currently operates 
                        more than 630 Quick Service 
                        and Casual Dining Restaurants 
                        in 9 countries across Africa with 
                        ambitions of further expansion 
                        across the region. Simbisa 
                        Brands was the first branded 
                        Quick Service Restaurant 
                        Group to establish a successful 
                        pan-African footprint
                        </p>
                        <p>
                        Simbisa Brands has a 
                        presence in Zimbabwe, Kenya, 
                        Zambia, Ghana, Mauritius, 
                        Namibia, Swaziland, Malawi 
                        and the Democratic Republic of 
                        Congo (DRC).
                        </p>
                        <p>
                            The QSR Business opened its 
                            inaugural Chicken Inn outlet in 
                            Harare, Zimbabwe in 1987. 
                            Following the opening of the 
                            original Chicken Inn, the QSR 
                            Business has expanded 
                            phenomenally with the addition 
                            of new brands and the 
                            franchising of existing brands.
                        </p>
                        <h3 style={{ padding: '40px 0px 0px' }}>Industry: Restaurants and Bars</h3>
                        <h3>Problem:</h3>
                        <p>Data Centre Failure</p>
                        <p>High Hardware Refresh Cycle Costs</p>
                    </div>

                    <div className='solution'>
                            <h1>Proposed Solution</h1>
                            <p>Amazon Web Services is the world’s most comprehensive and broadly 
                                adopted cloud platform, offering over 200 fully featured services from data 
                                centres globally.</p>
                                <p>
                                STC suggested and designed a two-tier architecture solution that separated 
                                the frontend web application from the backend database. Removing these 
                                resource dependencies made the solution highly resilient as this eliminated
                                a single point of failure. The web application was deployed behind an auto 
                                scaling group thereby allowing the workload to automatically increase and/or 
                                decrease resource in response to user activity as well as underlying
                                hardware components failures. Setting up of the database was made easy 
                                using the AWS Relational Database service which allows resource scalability 
                                without breaking the production service or taking it offline. For ease of node 
                                management using the systems sessions manager, all the production 
                                services were tagged under a common resource group. Amazon Web 
                                Services backup service, which is a fully managed service, was implemented 
                                using resource groups to target all production services. This therefore makes 
                                it possible to meet the recovery time and point objectives for Simbisa as 
                                STC’s client.
                                </p>

                                <h1>The Result</h1>
                            <p>STC and Simbisa Brands successfully deployed the Simbisa groupwide single 
                                instance Predictiv ERP System. This solution addressed the 
                                concerns the IT team raised during scoping prior to the implementation.
                                As a result, Simbisa Brands is guaranteed a 99.9% uptime on their 
                                system as there will be high availability. The migration from capital 
                                expenditure to operational expenditure saved Simbisa capital cost and 
                                also the worries of hardware depreciating and having to replace them. 
                                The Simbisa team also managed to focus more on their core business 
                                and worry less about the IT side of things because their infrastructure 
                                is now being hosted and managed in the cloud thus saving them time 
                                and money. Backup to their systems is now being kept in the cloud and 
                                the system automatically runs backups on scheduled times; this means 
                                if anything should happen to the system a backup will be there to restore 
                                the system to the current state. This mitigates the issues of long 
                                downtime in the event of system failure which however is highly unlikely 
                                as long as the system is running the workloads in the Amazon Web 
                                Services Cloud.</p>
                            
                    </div>          
                </div>  
            </div>                 
        </div>
    )
}

export default Simbisa;