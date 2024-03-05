import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import contact from '../../../src/static/images/contactus.jpg'


function Contact(){
    return(
        <div className='security'>
            <div className='securityContainer'>
                <div className='background'>
                <img src={contact} alt='cloud' width='100%' />
                </div>
                <div className='heading-title'>
                    <div className='title'>
                        <h1>Contact Us</h1>
                    </div> 
                </div>

                <div className='services'>
                    <div className='header'>
                        <h1>Harare Head Office</h1>
                        <h2>Address</h2>
                        <p>14 Steven Drive Msasa, Harare</p>
                        <h2>Phone</h2>
                        <p>+263 8677 004 341</p>
                        <p>+263 8688 002 260</p>
                        <h2>Email</h2>
                        <p>sales@telephonesandcables.com</p>
                        <p>marketing@telephonesandcables.com</p>

                        <h1>Connect With Us</h1>
                        <div className='socials'>  
                            <h1><a href='https://x.com/zw_stc?s=20'><FontAwesomeIcon icon={faTwitter} /></a></h1>
                            <h1><a href='https://www.facebook.com/profile.php?id=100066625576145'><FontAwesomeIcon icon={faFacebook} /></a></h1>
                            <h1><a href='https://www.linkedin.com/company/standard-telephones-and-cables-private-limited-zimbabwe/mycompany/'><FontAwesomeIcon icon={faLinkedin} /></a></h1>
                        </div>
                    </div>

                    <div className='statement'>
                        <h2>SEND US A MESSAGE</h2>
                        <form>
                            <div className='form'>
                                <label htmlFor="name">First Name</label><br></br>
                                <input type="text" id="fname" name="fname" />
                            </div>
                            <div className='form'>
                                <label htmlFor="name">Last Name</label><br></br>
                                <input type="text" id="lname" name="lname" />
                            </div>
                            <div className='form'>
                                <label htmlFor="name">Email</label><br></br>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className='form'>
                                <label htmlFor="name">Phone Number</label><br></br>
                                <input type="number" id="phone" name="phone" />
                            </div>
                            <div className='form'>
                                <label htmlFor="name">Message</label><br></br>
                                <textarea id='message'></textarea>
                            </div>
                            <button>SUBMIT</button>
                        </form>
                    </div>
                    
                    
                </div>
            </div>                 
        </div>
    )
}

export default Contact;