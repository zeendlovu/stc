import './tvsh.scss'
import tvsh from '../../../../static/images/tvsh.jpg'
import partner from '../../../../static/images/pexel.jpeg'

function Tvsh(){
    return(
        <div className='tvsh'>
          <div className='tvshContainer'>
                <div className='background'>
                <img src={partner} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>TV Sales and Home</h1>
                        <p>WordPress site deployment</p>
                    </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Excutive Summary</h1>
                        <p>TV Sales and Home (TVSH) is renowned for selling high-quality furniture, bedding, 
                            domestic appliances, electronics, and other goods through a network of more than 
                            50 stores around the country. Delivering high-quality goods is synonymous with TV 
                            Sales and Home. Regardless of the location or time of the month, they aim to offer 
                            a consistently high-quality service throughout their branch network. They have 
                            created an international e-commerce website that is aimed at all clients
                        </p>              
                    </div>

                    <div className='service1'>
                    <h3 style={{ padding: '0px 170px 10px' }}><a href='https://www.tvsales.co.zw/'>tvsales</a></h3>
                    <img src={tvsh} alt='cloud' width='70%' height='70%' />
                    </div>

                    <div className='service'>
                        <h1>Problem Statement</h1>
                        <p>TVSH was worried about how often their ecommerce platform went down during 
                            their busiest trade times of the month. They also lacked a trustworthy e-commerce 
                            platform backup facility. In order to handle the high amount of traffic during peak 
                            times, which required more high computing equipment, the current infrastructure 
                            was not scalable. TV Sales and Home needed a solution for these problems because 
                            it was costly in the long run to operate an e-commerce website on a subpar cloud 
                            instance.
                        </p>   
                        <h1>Why AWS and Standard Telephones & Cables</h1>
                        <p>TVSH made the decision to move its e-commerce system to the AWS cloud, which 
                            is widely recognized as the industry pioneer in cloud computing. TV Sales and Home 
                            was able to use AWS Cloud to address the two main issues: the high expense of 
                            using inefficient servers to run the ecommerce platform and the inflexibility of 
                            servers to handle high volumes during peak times. Scalable infrastructure that 
                            could adapt to varying levels of demand for computational power was provided via 
                            the AWS Cloud solution. Also, TV Sales and Home no longer needed to continue 
                            paying exorbitant costs for unused processing resources in between periods gave 
                            TV Sales and Home the solutions and know-how to quickly move the e-commerce 
                            platform to the AWS Cloud.</p>            
                    </div>
                    <div className='service1'>
                        <h3>TV Sales and Home: </h3>
                        <p>TVSH is a household brand in 
                            Zimbabwe, that supports our local 
                            Zimbabwean manufacturers with 
                            furniture, bedding, and 
                            electronics, as the demand for 
                            quality locally produced furniture, 
                            bedding, and electronics 
                            increases at the very best prices, 
                            to ensure that they are always the 
                            market leaders in Zimbabwe. </p>
                        <h3 style={{ padding: '40px 0px 0px' }}>Industry: Retail</h3>
                        <h3>Problem:</h3>
                        <p>High server maintenance costs</p>
                        <p>High instances of website downtime</p>
                    </div>

                    <div className='solution'>
                            <h1>Proposed Solution</h1>
                            <p>For deploying a WordPress website, STC suggested a multi-tiered design based on 
                                the Amazon RefArch framework. This system made use of a NAT Gateway, Route53, 
                                ALB, EC2 instances, EFS, and RDS. The client was first introduced to the WordPress 
                                solution during the initial call. The solution's strong resilience, capacity for self-healing, and 90% uptime are a success criteria.
                                </p>
                            <h3 style={{ padding: '5px' }}>High level Architecture components</h3>
                            <p>With the removal of a single point of failure, STC suggested a multi-tiered 
                                architecture solution that increased the security and performance of the web 
                                application using the AWS Nat service, SSL certificate, and auto-scaling group, as well 
                                as web application from the database. The solution eliminates a lot of the need for 
                                an upfront hardware investment, resulting in faster application development and 
                                deployment.
                                </p>

                                <h1>The Result</h1>
                            <p>With the expertise of STC, TVSH now boasts a cutting-edge infrastructure with a 
                            99.99% uptime rate. By embracing the various pricing structures in AWS that allowed 
                            them to pay only for the resources they were using, TVSH earned significant upfront 
                            cost savings of over 60% on hardware acquisition and long-term maintenance 
                            expenditures. Additionally, running in the AWS cloud boosted agility, scalability, and 
                            allowed the business create a modernization plan that will put it in a better position 
                            to be more inventive. By a wide margin, TVSH was able to accomplish their time-tomarket objectives in the AWS cloud, exceeding clients' expectations well ahead of 
                            schedule. TVSH was able to adhere to the 3-month backup retention time standards 
                            thanks to AWS Backup.</p>
                            
                    </div>          
                </div>  
            </div>                 
        </div>
    )
}

export default Tvsh;