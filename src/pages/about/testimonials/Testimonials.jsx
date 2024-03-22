import './testimonials.scss'
import samsung from '../../../static/images/comms1.jpg'

function Testimonials(){
    return(
        <div className='testimonial'>
          <div className='testimonialContainer'>
                <div className='background'>
                <img src={samsung} alt='cloud' width='100%' />
                </div>
                

                <div className='heading-title'>
                    <div className='title'>
                        <h1>Client Testimonials</h1>
                        <p>As the Samsung PABX product range is ridding off into the sunset, STC will continue
                             to offer limited support to customers whilst restructuring our product offerings to fit 
                             the unique needs of our customers.</p>
                    </div> 
                </div>

                <div className='services'>
                    <div className='service'>
                        <h2>Samsung Digital Communication System (DCS) Telephones</h2>
                        <p>The Samsung Digital Communication System (DCS) Telephones offer a user friendly design with easy access to 
                            system features. Samsung Handsets can be connected to telephone systems ( IP or PBX ) to allow a full 
                            connectivity and collaboration among offices and businesses.</p>
                        <p>This digital telephone is intended to be connected as a digital extension of a Samsung PABX telephone system 
                            (OfficeServ7030,7070,7100,7200 and 7400). The connection allows voice communication between the central
                             processor unit and the telephone. It is not intended to be connected to any other telephone system or 
                             the public tele-phone network. Some of the features include three way conference call and voicemail 
                             features.</p>                
                    </div>

                    <div className='service'>
                            <h2>Samsung OfficeServ 7030 IP PABX Phone System</h2>
                            <p>OfficeServ 7030 is the best communication product for offices with 4 to 20 lines and provides 
                                advanced functions including voice and applications. Users can enjoy various phone functions
                                 and applications using the various devices such as digital phones, IP phones, WLAN phones,
                                  PCs and servers.</p>
                                
                    </div>     
                </div>  
            </div>                 
        </div>
    )
}

export default Testimonials;