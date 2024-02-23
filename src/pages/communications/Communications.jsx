import './communications.scss'

function Communications(){
    return(
        <div className='communications'>
          <div className='communicationsContainer'>
                <div className='background'></div>
           
                <div className='heading-title'>
                <div className='title'>
                    <h1>Communications</h1>
                    <p>The way your employees interact with one another and customers is changing.</p>
                </div> 
                </div>
  
                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>We deliver a range of products and services that can enhance your journey to the cloud, including:</h3>
                                <ul>
                                    <li>Cloud migration consulting and professional services.</li>
                                    <li>Hosting your Microsoft Workloads.</li>
                                    <li>Provide Managed services.</li>
                                    <li>Cloud backup and disaster recovery.</li>
                                    <li>Database Hosting and Migration Services.</li>
                                </ul>
                        </div>
                        <div className="benefits">
                        <h3>AWS Cloud provides your business with:</h3>
                            <ul>
                                <li><b>Flexibility:</b> Standard Telephones and Cables offers an elastic cloud model that enables our customers to scale quickly and on-demand.</li>
                                <li><b>Reliability:</b> Standard Telephones and Cables provides direct connectivity to the cloud on our highly resilient, meshed network.</li>
                                <li><b>Security: </b>Standard Telephones and Cables secure network and dedicated connections to the cloud ensure your data is always protected.</li>
                            </ul>
                            <p>Find out more about how Standard Telephones and Cables can support your journey to Africa's Cloud.</p>
                        </div>
                    </div>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>Unified Communications</h1>
                    </div>

                    <div className='service'>
                        <h1>Samsung PABX Systems</h1>
                    </div>

                    <div className='service'>
                        <h1>CRM Services</h1>
                    </div>
                </div>  
            </div>                 
        </div>
    )
}

export default Communications;