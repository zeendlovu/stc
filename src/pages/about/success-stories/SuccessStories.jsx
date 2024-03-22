import './successStories.scss'
import samsung from '../../../static/images/comms1.jpg'
import tvsh from '../../../static/images/clients/tvsh.jpg'
import simbisa from '../../../static/images/clients/simbisa.jpg'
import syntegra from '../../../static/images/clients/logo.png'
import bushman from '../../../static/images/clients/bushman.jpg'
import cabs from '../../../static/images/clients/cabs.png'
import doves from '../../../static/images/clients/doves.jpg'


function SuccessStories(){
    return(
        <div className='testimonial'>
          <div className='testimonialContainer'>
                <div className='background'>
                <img src={samsung} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Success Stories</h1>
                        <p>What we did for our clients</p>
                    </div> 
                </div>

              <div className='services'>
                  <div className='service'>
                      <img src={tvsh} alt='cloud' width='100%'/>
                      <h2>TV Sales & Home</h2>
                      <p>The migration of the TV Sales and Home business
                          application server to AWS cloud was successfully
                          executed in the live environment, in a timely
                          manner without any site disruptions, using
                          CloudEndure. The live server is now operational in
                          the cloud with the right sized EC2 specification and
                          provisioned IOPS on the SSD volume. Right sizing the
                          EC2 server provided the correct amount of
                          compute power for the business transaction
                          processing demands from over 40 branches.</p>
                  </div>

                  <div className='service'>
                      <img src={simbisa} alt='cloud' width='100%' height='100%'/>
                      <h2>Simbisa Brands</h2>
                      <p>Standard Telephones and Cables was able to migrate our application
                          stack from our old environment into AWS. As promised, we now have a
                          robust application stack with a backup solution that ensures we can
                          restore our data at any point in time. We can further restore data to
                          secondary environments for inspection without affecting our
                          production environment. Not only did STC ensure that we harnessed a
                          25% saving on our monthly bill but was able to provide us with
                          additional services which provide value and are completely
                          managed by STC and AWS. .</p>
                  </div>

                  <div className='service'>
                      <img src={syntegra} alt='cloud' width='100%' height='100%'/>
                      <h2>Syntegra</h2>
                      <p>In the AWS cloud, Syntegra increased their time to market by a
                          considerable margin thus meeting their customers’ expectations way
                          ahead of schedule. AWS Backup enabled Syntegra to meet backup
                          retention period requirements of 3 months. Syntegra achieved
                          Recovery Time Objectives of minutes and sub-second Recovery Point
                          Objectives utilizing Cloud endure.
                      </p>
                  </div>

                  <div className='service'>
                      <img src={bushman} alt='cloud' width='100%' height='100%'/>
                      <h2>Bushman Rock</h2>
                      <p>STC deployed a new 3CX IP PBX across the safari lodge. This process
                          included upgrading the internet connection for both the lodges and
                          administration offices to ensure uninterrupted communication both
                          internally and externally. The deployment was done within a number
                          of days. . Having extensions installed on the staff’s smart phones
                          ensured that there wasn’t any need for them to use their personal cell
                          numbers for work-related purposes.</p>
                  </div>

                  <div className='service'>
                      <img src={cabs} alt='cloud' width='100%' height='100%'/>
                      <h2>Cabs</h2>
                      <p>3CX’s low-cost routing enabled massive call cost savings at CABS
                          and also allowed the staff to be completely mobile. Call
                          management, focusing specifically on the contact center, was
                          simplified thanks to STC’s partnership with 3CX. The Call Flow
                          Designer permitted CABS to design routing for callers to reach
                          directly the department they wished to speak to, reducing caller hold
                          time, complex automated menus, and the risk that callers choosing
                          the wrong menu option. The company also saw an extensive
                          improvement in administration, thanks to the powerful 3CX
                          monitoring and reporting functions.</p>
                  </div>

                  <div className='service'>
                      <img src={doves} alt='cloud' width='auto' height='auto'/>
                      <h2>Doves Funeral Services</h2>
                      <p>The implementation of Freshdesk at Doves Call Center made task
                          visibility easier, and thus enhanced productivity. The Call Centre
                          teams use Freshdesk because they receive a large number of
                          requests via email, phone calls, and Facebook, and the integration of
                          all these platforms made ticket tracking an easier task. The team can
                          now measure input and output performance as well as targeted SLA
                          compliance. The system has enabled real-time feedback, which helps
                          us actively manage service issues and problem resolution.</p>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default SuccessStories;