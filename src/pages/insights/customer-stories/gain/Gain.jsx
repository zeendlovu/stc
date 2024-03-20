import './gain.scss'
import gain_image from '../../../../static/images/gain.jpg'
import partner from '../../../../static/images/pexel.jpeg'

function Gain(){
    return(
        <div className='gain'>
          <div className='gainContainer'>
                <div className='background'>
                <img src={partner} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Gain Cash and Carry</h1>
                        <p>Migration and Disaster Recovery</p>
                    </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Excutive Summary</h1>
                        <p>Gain Cash and Carry has become a prominent player in the wholesale industry. One 
                            of the key strengths of Gain Cash and Carry is its commitment to providing an 
                            exceptional shopping experience. </p>  
                        <p>Gain Cash and Carry's focus on continuous improvement and embracing new 
                            technologies is evident in their collaboration with Standard Telephones and Cables
                            for an application migration assessment and migration project as well as designing 
                            a disaster recovery strategy for their OpenBravo ERP Application. By leveraging 
                            Standard Telephones and Cables’ expertise and services, Gain Cash and Carry 
                            aimed to enhance its operations further, optimize IT infrastructure, and strengthen 
                            its disaster recovery capabilities.
                        </p>              
                    </div>

                    <div className='service1'>
                    <h3 style={{ padding: '0px 130px 10px' }}>https://gain.co.zw/</h3>
                    <img src={gain_image} alt='cloud' width='70%' height='70%' />
                    </div>

                    <div className='service'>
                        <h1>Problem Statement</h1>
                        <p>Gain Cash and Carry, was very concerned about ongoing technology failures and 
                        the high expenses of hardware refresh cycles. Gain Cash and Carry's search for a 
                        more dependable and effective way to handle these problems was spurred by 
                        these challenges.</p>   
                        <p>In addition to interfering with business operations, the frequent hardware failures 
                        caused a great deal of downtime, leading to lost sales opportunities and disgruntled 
                        clients. Furthermore, the costs associated with routinely updating their hardware 
                        infrastructure placed a heavy financial strain on the business's resources.
                        </p>   
                        <h1>Why AWS and Standard Telephones & Cables</h1>
                        <p>Gain Cash and Carry realized they needed to adopt a novel approach that would 
                        offer a long-term fix to overcome the mentioned obstacles. They looked to Amazon 
                        Web Services (AWS) because of its track record of providing dependable and 
                        reasonably priced cloud computing services.</p> 
                        <p>With the help of Standard Telephones and Cables, Gain Cash and Carry managed 
                        to reduce the risk of hardware failures and the necessity for expensive hardware 
                        purchases and refresh cycles by moving their infrastructure to the AWS Cloud. 
                        Standard Telephones and Cables created a tailored migration strategy and, using 
                        their expertise, worked with Gain Cash and Carry to transition their application to 
                        the AWS Cloud effectively</p>            
                    </div>
                    <div className='service1'>
                        <h3>Gain Cash and Carry: </h3>
                        <p>
                            60+ nationwide outlets, offers
                            diverse product range sourced 
                            from trusted suppliers. 
                            Exceptional shopping experience 
                            with friendly staff and 
                            experienced management. Our 
                            stores feel like a welcoming 
                            family environment, making your 
                            shopping experience unique</p>
                        <h3 style={{ padding: '40px 0px 0px' }}>Industry: Retail</h3>
                        <h3>Problem:</h3>
                        <p>Data Centre Failure</p>
                        <p>High Hardware Refresh Cycle Costs</p>
                    </div>

                    <div className='solution'>
                            <h1>Proposed Solution</h1>
                            <p>As part of the proposed migration solution, STC leveraged AWS services such as 
                                Application Migration, Virtual Private Network (VPN), and Elastic Disaster Recovery
                                to facilitate the seamless migration of the OpenBravo application and its associated 
                                databases from on-premises to run on AWS cloud EC2 instances. Running the 
                                application on EC2 instances allowed for scalability, flexibility, and efficient 
                                resource utilization. It provided the necessary computing power and infrastructure 
                                to support the application's demands, while also enabling easier management and 
                                monitoring through other AWS services.</p>
                            <p>The VPN service provided a secure and private network connection between the onpremises infrastructure and the AWS cloud. This enabled secure data transfer and 
                            communication during the migration process between the two platforms, ensuring 
                            data integrity.
                            </p>
                            <p>By implementing an Elastic Disaster Recovery solution, STC ensured the application's 
                                high availability and data protection on the cloud. The solution continuously
                                replicates critical components of the migrated OpenBravo application across 
                                multiple AWS Availability Zones in the cloud, reducing the risk of data loss and 
                                minimizing downtime in the event of a disaster. STC worked closely with Gain Cash 
                                and Carry to define recovery time objectives (RTO) and recovery point objectives 
                                (RPO), ensuring that the disaster recovery solution met their business continuity 
                                requirements.
                                </p>

                                <h1>The Result</h1>
                            <p>With Standard Telephones and Cables’ expertise, Gain Cash and Carry now has 
                            cutting-edge infrastructure that ensures a 99.99% uptime rate. Gain Cash and Carry 
                            saved more than 60% on hardware acquisition and long-term maintenance costs by 
                            embracing AWS's multiple pricing schemes, which allowed them to pay only for the 
                            resources they used. Furthermore, running in the AWS cloud increased agility and 
                            scalability, allowing the company to develop a modernization strategy that will put 
                            it in a better position to be more innovative. Gain Cash and Carry improved their 
                            resilience and data protection by implementing STC's elastic disaster recovery 
                            service. This allowed them to adhere to the 3-month backup retention requirements, 
                            lowering the risk of data loss.</p>
                            
                    </div>          
                </div>  
            </div>                 
        </div>
    )
}

export default Gain;