import './story.scss'
import about from '../../../static/images/about.jpg'

function Story(){
    return(
        <div className='story'>
            <div className='storyContainer'>
                <div className='background'>
                <img src={about} alt='cloud' width='100%' />
                </div>
                <div className='heading-title'>
                    <div className='title'>
                        <h1>Our Story</h1>
                        <p>Standard Telephones & Cables (Successors) Private Limited is a Zimbabwean owned company which specializes in Telecommunications, cloud services and Electronic Security Solutions. We believe in delivering cost effective Telecommunication and cloud solutions and high-end Electronic Security solutions to our customers.</p>
                    </div> 
                </div>

                <div className='services'>
                    <div className='header'>
                        <h1>About Us</h1>
                        <h2>Company Overview</h2>
                        <p>STC is an Amazon Web Services (AWS) Advanced Partner Tier Partner headquartered in Zimbabwe. 
                            In partnership with AWS, STC has evolved to meet its clients’ dynamic needs, emphasizing its 
                            strong commitment to the technology industry. With over 55 years of experience in telecommunications 
                            and digital security in Zimbabwe, partnering with AWS has enriched our solutions portfolio, 
                            enabling us to offer integrated services including AWS Cloud Services, advanced telecommunications, 
                            and intelligent security systems. STC is a technology company dedicated to applying technology 
                            to reduce costs, improve efficiencies and contribute towards value adding for its clients.
                            Always chasing technology, with over 50 years of existence behind it. STC boasts of experience 
                            in telecommunications, including cloud-based enterprise telecommunication solutions, 
                            video conferencing, and video analytics (AI), access control and monitoring systems.</p>
                    </div>
                    <div className='statement'>
                        <h2>Our Vision</h2>
                        <p>To enable African enterprises to transform value creation 
                                across the continent and beyond by providing affordable, scalable, 
                                and flexible on-demand cloud technologies.</p>
                        <h2>Our Mission</h2>
                        <p>To enable businesses and organizations to focus on maximizing their 
                                performance, by deploying their systems and applications into the cloud 
                                and removing time consuming management of their hardware from the critical
                                 path of their operations.</p>
                        <h2>Our Values</h2>
                        <p>Innovation. Teamwork. Professionalism. Commitment</p>
                    </div>
                    
                    <div className='partner'>
                        <div className='img'>
                            <h1>Our Partner</h1>
                        </div>
                        <div className='para1'>
                            <p>
                            Our passion to deliver service of impeccable quality and to insure that our clients 
                            are on the forefront technological advancements resulted in us venturing into cloud 
                            service provision. We are a proud AWS Certified partner offering IT infrastructure 
                            services to businesses in the form of web services — now commonly known as cloud computing. 
                            One of the key benefits of cloud computing is the opportunity to replace up-front capital 
                            infrastructure expenses with low variable costs that scale with your business. With the 
                            Cloud, businesses no longer need to plan for and procure servers and other IT infrastructure
                             weeks or months in advance. Instead, they can instantly spin up hundreds or thousands of 
                             servers in minutes and deliver results faster. Today, our partnership with Amazon Web 
                             Services makes it possible for us to provide a highly reliable, scalable, low-cost 
                             infrastructure platform in the cloud that powers businesses in different locations.
                            </p>
                        </div>
                    </div>

                    <div className='success'>
                        <div className='block'>
                          <h1>20+</h1>
                          <h3>AWS Certification</h3>  
                        </div>
                        <div className='block'>
                        <h1>30+</h1>
                        <h3>Colleagues & Counting</h3>  
                        </div>
                        <div className='block'>
                        <h1>50+</h1>
                        <h3>Customer Launches</h3>  
                        </div>
                        <div className='block'>
                        <h1>50+</h1>
                        <h3>Year of experience</h3>   
                        </div>
                    </div>

                    <div className='partner'>
                        <div className='img'>
                            <h1>Our Promise</h1>
                        </div>
                        <div className='para1'>
                            <p>
                            Our chase for technology is all aimed at reducing the customer's communication 
                            costs and delivering quality service both onsite and remotely. STC aims to 
                            keep installation and running costs competitive by maintaining fair and stable 
                            pricing. We will always advise you on the latest technologies which deliver 
                            more cost effective solutions in Telecommunications and high end Electronic Security Solutions.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>                 
        </div>
    )
}

export default Story;