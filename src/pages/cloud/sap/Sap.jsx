import './sap.scss'

function Sap(){
    return(
        <div className='security'>
          <div className='securityContainer'>
                <div className='background'></div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>SAP on AWS</h1>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Migrating your SAP systems and data to AWS</h3>
                                <p>STC helps our customers run SAP on AWS so they can benefit from AWS’s state-of-the-art 
                                    cloud infrastructure services. Migrating your SAP systems and data to AWS unlocks a new realm 
                                    of possibilities. Whether you choose to lift & shift existing infrastructure to reduce costs, 
                                    modernize business processes with native AWS services, or need infrastructure support to 
                                    transform to SAP S/4HANA, STC can help you reimagine what is possible with SAP on AWS.</p>
                                    <p>The business benefits of running SAP workloads on AWS are already well proven with thousands
                                         of customers now running such workloads. It brings together the skills and strengths of 
                                         people and machines, thus establishing the foundation for innovative business models
                                          and services.</p>
                                    <p>Customers choose AWS because it has the most complete cloud environment for business innovation 
                                        and is delivering a variety of benefits to their SAP application and SAP HANA workloads. With 
                                        the largest number of SAP Certified Compute Instances, the AWS Cloud meets these customers' 
                                        critical needs for performance, rapid provisioning, scalability, compliance and security.</p>
                        </div>
                    </div>
                </div>
                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Why Organizations choose STC for “SAP on AWS” Journey</h3>
                                <p>STC works with organizations around Africa to engineer robust, secure, and cost-optimized 
                                    cloud-based digital platforms on AWS that transform them into modern, digital, and innovative 
                                    enterprises. Our SAP on AWS Cloud services enables you to increase innovation, scale business 
                                    services, improve operational agility and stay on top of the competition.</p>
                                    <p>Hosting SAP solutions on AWS can present many challenges, starting from building a solid business 
                                        case and defining the roadmap to choosing the best and most secure solution and migrating instances 
                                        to integrate with your existing IT landscape. Whether you are moving on-prem workloads or migrating 
                                        between different cloud providers, STC's project management, incredibly skilled technical staff, 
                                        and our Workload Migration Services remove risk and accelerate migration. We utilize the best practices
                                         we’ve developed while supporting the world’s most complex cloud environments to ensure your migration 
                                         path is efficient and secure.</p>
                                    <p>STC's dedicated SAP on AWS Consulting team can orchestrate your SAP cloud migration end-to-end, 
                                        whether it’s an isolated portion of your SAP landscape, such as disaster recovery or Test / Dev 
                                        or a mission-critical S/4HANA Production Systems. Companies and organizations choose AWS 
                                        cloud-based technologies simply because AWS remains the most trusted, and comprehensive 
                                        infrastructure and service offering for innovating in the cloud. And, when selecting an AWS
                                         partner, STC continues to stand out and be recommended by AWS and our customers, again and 
                                         again.</p>
                        </div>
                    </div>
                </div>

                <div className='head'>
                    <h1>How STC Can Help</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>SAP on AWS Cloud Assessment</h1>
                        <p>STC helps its customers by providing advisory services, which develop an efficient and 
                            effective plan for their cloud adoption journey. Services include financial / TCO 
                            (total cost of ownership) analysis, technical solution design, security, compliance, and licensing.</p>                    
                    </div>

                    <div className='service'>
                            <h1>Proof-of-Concept</h1>
                            <p>STC Proof of Concept helps customers to test SAP on AWS, including SAP ERP/ECC migration to HANA 
                                or S/4HANA, SAP BW migration to HANA or BW/4HANA, SAP OS/DB migration, and new SAP solution 
                                implementation.</p>
                    </div>

                    <div className='service'>
                            <h1>SAP on AWS Migrations</h1>
                            <p>STC helps Organizations to migrate their existing SAP environments or systems to AWS, including 
                                all-in SAP migrations (PRD/QAS/DEV), hybrid SAP migrations (QAS/DEV/TST), single system migrations 
                                (BW), or the combination of different systems.</p>
                    </div>
                    <div className='service'>
                            <h1>SAP on AWS Managed Services</h1>
                            <p>We can provide Managed services for SAP environments on AWS, including migration services, AWS IaaS
                                 Administration, OS/DB Administration / Patching, Backup and Recovery, and SAP Basis / NetWeaver
                                  Administration.</p>
                    </div>
                    <div className='service'>
                            <h1>STC Value Added Solutions for SAP</h1>
                            <p>STC helps customers by offering the solutions for SAP on AWS, like High Availability,
                                 Backup & Recovery, and Disaster Recovery on Cloud.</p>
                    </div>                
                </div> 

                <div className='head'>
                    <h1>Services and offerings</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>SAP Greenfield Deployment</h1>
                        <p>Plan, deploy the complete AWS landscape for customers who are starting their SAP ERP journey, 
                            or for customers who don’t want to migrate their legacy on-premise applications and like to start 
                            fresh in the cloud.</p>
                            <p>We have expertise in cloud solution designing and deploying on AWS the leading SAP leading 
                                application landscape(s) / component(s).</p>                    
                    </div>

                    <div className='service'>
                            <h1>SAP Migrate and Modernize</h1>
                            <p>Migrations and modernization services for existing SAP customers like technical assessments, 
                                landscape planning and sizing, all migration scenarios, extending SAP capabilities using 
                                integrations with other cloud services like IoT, AI/ML based business analytics, CRM tools, 
                                security services, etc.</p>
                    </div>

                    <div className='service'>
                            <h1>Disaster Recovery</h1>
                            
                                <ul>
                                <li>New DR site on AWS Cloud to protect the on-premises SAP environment.</li>
                                <li>Replace existing on-premises DR site(s) with cost-effective cloud alternatives.</li>
                                <li>Complement Existing DR site(s) to extend their capacity.</li>


                                </ul>
                    </div>
                    <div className='service'>
                            <h1>SAP BASIS Services</h1>
                            <p>SAP BASIS experts taking care of the administrative tasks of the customer’s SAP landscape: </p>
                            <ul>
                                <li>SAP housekeeping services</li>
                                <li>SAP HANA performance monitoring and fine-tuning</li>
                                <li>SAP HANA backups and restore</li>
                                <li>SAP Version / EHP / Support package upgrade</li>
                            </ul>
                    </div>              
                </div>   
            </div>                 
        </div>
    )
}

export default Sap;