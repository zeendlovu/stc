import './cctv.scss'
import cctv from '../../../static/images/1682336849310.jpeg'

function Cctv(){
    return(
        <div className='cctv'>
          <div className='cctvContainer'>
                <div className='background'>
                <img src={cctv} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>CCTV & Surveillance</h1>
                        <p>Find the best value CCTV systems to protect & monitor your property. Customize your CCTV 
                            camera system to fit your security & budget needs.</p>
                    </div> 
                </div>

                <div className='content-element'>
                    <div className='header'>
                        <div className="services-header">
                            <h3>Affordable peace of mind</h3>
                                <p>STC is a seller of security cameras, video recorders (DVR, NVR), surveillance systems, and all other things CCTV. 
                                    We supply security products to the government, businesses, and home owners alike of all shapes and sizes.
                                     All of our systems come fully equipped to handle all of your remote viewing needs. No matter where you are in the world, 
                                     as long as you have an internet or 3G/4G connection, you’ll be able to view your video feed at any time you want.</p>
                                <p>
                                Our technical support is unparalleled. For as many years as we’ve been in the business, we have yet to come across anyone 
                                else who spends as much time with their customers as we do. You don’t need to have an expert knowledge of CCTV systems, 
                                just a helpful and willing support staff that’s more than happy to assist you with anything you may need.
                                </p>
                        </div>
                    </div>
                </div>
                <div className='head'>
                    <h1>Our Trusted Brands</h1>
                </div>

                <div className='services'>
                    <div className='service'>
                        <h1>HIKVISION</h1>
                        <p>Hikvision is a leading IoT solution provider with video as its core competency. Featuring an extensive and highly 
                            skilled R&D workforce, Hikvision manufactures a full suite of comprehensive products and solutions for a broad 
                            range of vertical markets. Hikvision products also provide powerful business intelligence for end users, which 
                            can enable more efficient operations and greater commercial success</p>                
                    </div>

                    <div className='service'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tTLZAq8pVi0?si=I63B_T1Fm4LKGlsa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                    </div>

                    <div className='service'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8kETL5VcfGQ?si=oE2h-p7LwCuRRwGt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
                    </div>         

                    <div className='service'>
                            <h1>Dahua</h1>
                            <p>Dahua is a leading product and solution provider in the global video surveillance industry. It offers end-to-end 
                                security solutions, systems, and services to create values for city operations, corporate management, and consumers. 
                                Dahua products are widely used globally in many fields such as retail, education, utility, banking, public security, 
                                energy infrastructure, telecommunication, intelligent-building, and intelligent-transportation.</p>
                            
                    </div>
                    <div className='service'>
                        <h1>Samsung </h1>
                            <p>Samsung are world renowned for producing high quality electronics and their CCTV and security camera systems are no different. 
                                If you are looking for a CCTV camera to add to your existing system or to set up a brand new one a Samsung camera may be the 
                                right choice for you. We would be happy to help support your search for the perfect CCTV solution. Whether you need indoor or
                                 outdoor cameras we are sure to be able to have the product for you. We can help you in choosing the right DVR or NVR for your 
                                 situation and ensure that your product, once set up, will work day and night.</p>
                    </div> 
                    <div className='service'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wQCBM4-Ihoc?si=FFsSEJ908Cg3AxxZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                    </div>             
                </div>  
            </div>                 
        </div>
    )
}

export default Cctv;