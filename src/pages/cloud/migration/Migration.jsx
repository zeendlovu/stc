import './migration.scss'
import Cloud from '../../../static/images/aws-background.jpg'

function Migration(){
    return(
        <div className='migration'>
          <div className='migrationContainer'>
                <div className='background'>
                <img src={Cloud} alt='cloud' width='100%' />
                </div>

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Cloud Migration Services</h1>
                        <p>Overcome the Obstacles to Cloud Migration with a Certified AWS Migration Competency Partner</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Migrate to Cloud with STC and AWS</h3>
                                <p>Migrating to Amazon Web Services (AWS) is the key to freeing your business from 
                                    the constraints of inflexible work environments, scarce IT resources, and 
                                    aging infrastructure. And with our help, you won’t have to do it alone. At STC,
                                     we understand that cloud migration can seem daunting and overwhelming. That’s why
                                      we offer comprehensive assistance to ensure a seamless transition to AWS. We will 
                                      collaborate with you to carefully plan, scope, and size your cloud migration, 
                                      guaranteeing that you achieve the results you expect. </p>
                                    <p>With AWS as your new foundation, you will experience unparalleled flexibility, scalability, 
                                    and agility. Say goodbye to the limitations of traditional work environments and hello to the
                                     freedom of the cloud. Whether you need to modernize your applications, improve data security,
                                      or enable faster innovation, AWS has the solutions to drive your success.</p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>Here are some key advantages of migrating and saving with STC and AWS:</h1>
                </div>
                
                <div className='services'>
                    <div className='service1'>
                        <h2>No Hardware Investment</h2>  
                        <p>With AWS, businesses can add storage capacity without the need to invest in expensive hardware infrastructure. This eliminates the upfront costs associated with purchasing and maintaining physical servers.</p>          
                    </div>

                    <div className='service1'>
                            <h2>Reduced IT Staffing Costs</h2>
                            <p>AWS offers a range of managed services that alleviate the need for businesses to hire and retain skilled IT personnel. These services automate various tasks, such as server management and database administration, reducing the need for dedicated IT staff.</p>
                    </div>

                    <div className='service1'>
                            <h2>Pay-As-You-Go Model</h2>
                            <p>AWS follows a pay-as-you-go pricing model, which means businesses only pay for the resources they consume. This flexible payment structure enables cost efficiency by eliminating the need to invest in excess capacity or overprovision resources.</p>
                    </div>
                    <div className='service1'>
                        <h2>Cost Visibility And Measurement</h2>  
                        <p>AWS provides tools and monitoring capabilities that allow businesses to track and measure their usage and associated costs. This transparency enables businesses to optimize their resource allocation and identify areas where cost savings can be achieved.</p>          
                    </div>

                    <div className='service1'>
                            <h2>Scalability</h2>
                            <p>Cloud services provide the ability to scale resources up or down based on demand. This allows organizations to efficiently manage varying workloads without over-provisioning or under-provisioning resources.</p>
                    </div>

                    <div className='service1'>
                            <h2>Flexibility and Agility</h2>
                            <p>Cloud services offer a wide range of tools, services, and computing resources that can be easily tailored to specific business needs. This agility allows for faster development, deployment, and iteration of applications and services.</p>
                    </div>
                
                </div>

                <div className='head'>
                    <h1>The Standard Telephones and Cables Cloud Migration Framework</h1>
                    <p>Our comprehensive cloud migration framework is based upon industry and AWS best practices for migrations to the cloud that we've developed over the past years.</p>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Cloud Migration Discovery</h1>
                        <p>We combine our best practices approach with automated tools such as AWS Migration Readiness assessment to assess your infrastructure, applications and data to determine the best solution for your business needs.</p>                    
                    </div>

                    <div className='service'>
                            <h1>Cloud Migration Planning</h1>
                            <p>With the help of our modern analysis tools, prioritize applications and identify required remediations to help you reduce risk, time, and cost, as well as enhance agility, performance, and availability.</p>
                    </div>

                    <div className='service'>
                            <h1>Cloud Migration Strategy</h1>
                            <p>Leveraging data from the discovery phase, we assess your business needs, identify opportunities and recommend the optimal migration strategy and associated cloud services. Where possible, we investigate modernization “low-hanging fruit” opportunities to accelerate the massive value available from the cloud.</p>
                    </div>
                    <div className='service'>
                            <h1>Cloud Migration Execution</h1>
                            <p>We leverage our extensive migration experience, automated cloud management and migration tools to support a smooth migration.</p>
                    </div>
                
                </div>  
            </div>                 
        </div>
    )
}

export default Migration;